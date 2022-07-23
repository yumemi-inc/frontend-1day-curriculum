import './App.css'
import { useState, useEffect } from 'react'
import getPrefData from './components/prefAPI'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
import { makeNewStates } from './makeNewStates'

// Highchartsに「表示するデータがありません」などのメッセージを表示するための処理。
NoDataToDisplay(Highcharts)

type PrefData = {
  prefCode: number
  prefName: string
}

const App: React.FC = () => {
  const [prefectures, setPrefectures] = useState<PrefData[]>([])
  const [checkedPrefCodes, setCheckedPrefCodes] = useState<number[]>([])
  const [loadedPrefData, setLoadedPrefData] = useState(
    new Map<number, number[]>()
  )

  const graphData: { data: number[]; name: string }[] = checkedPrefCodes
    // チェックされた都道府県コード[] => PrefData[]
    .map((code) => prefectures.find((pref) => pref.prefCode === code))
    // PrefData[] => 人口情報取得済みのものだけにフィルタリング。
    .filter((pref) => pref !== undefined && loadedPrefData.has(pref.prefCode))
    // (nameとdata（人口情報[]）を持ったオブジェクト)[]に変換
    .map((pref) => ({
      name: pref!.prefName,
      data: [...loadedPrefData.get(pref!.prefCode)!],
    }))
    // 伸び代：filter後にmapした方が効率いいかも

  // 伸び代：なんのオプション？型もあると嬉しい
  const options = {
    chart: {
      type: 'spline',
      backgroundColor: '#fff',
      polar: true,
    },
    title: {
      text: '人口構成',
    },
    lang: {
      noData: 'データがありません',
    },
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#303030',
      },
    },
    xAxis: {
      /* APIが返してくる年度はこれだった */
      categories: [
        '1960',
        '1965',
        '1970',
        '1975',
        '1980',
        '1985',
        '1990',
        '1995',
        '2000',
        '2005',
        '2010',
        '2015',
        '2020',
        '2025',
        '2030',
        '2035',
        '2040',
        '2045',
      ],
      offset: 0,
      title: {
        text: '年度',
        align: 'high',
        textAlign: 'left',
        rotation: 0,
        offset: 0,
        margin: 0,
        y: 30,
        x: -27,
      },
    },
    yAxis: {
      visible: true,
      tickPosition: 'inside',
      offset: 0,
      title: {
        text: '人口数',
        align: 'high',
        textAlign: 'left',
        rotation: 0,
        offset: 0,
        margin: 0,
        y: -20,
        x: -47,
      },
    },
    series: graphData,
  }

  useEffect(() => {
    getPrefData.GetPref().then((data) => setPrefectures(data))
    // 伸び代：エラーハンドリング。データ取得できたか確認
  }, [])

  // 伸び代：名前にもう少し情報含まれてて欲しい
  const handleChange = (checked: boolean, prefCode: number) => {
    // 伸び代：名前にもう少し情報含まれてて欲しい
    makeNewStates(checked, prefCode, checkedPrefCodes, loadedPrefData).then(
      (res) => {
        setCheckedPrefCodes(res.newCheckedPrefCodes)
        setLoadedPrefData(res.fetchedNewLoadData)
      }
    )
  }

  return (
    // 伸び代：containerよりもう少し具体的な名前に（例：prefecture-graph-page）
    // ページがふえたとき対策
    <div className='container'>
      {/* 伸び代：h1タグにしよう */}
      <div className='h1 container-title'>
        <span>都道府県別の総人口推移グラフ</span>
      </div>
      {/* 伸び代：h3タグにしよう */}
      <div className='h3 container-main'>
        <span>都道府県</span>
      </div>

      {/* 伸び代：ul、liにしよう */}
      <div className='app-prefectures-list-container'>
        {prefectures?.map((item) => {
          return (
            <label key={item.prefCode} className='app-prefectures-list'>
              <input
                className='app-prefectures-list-checkbox'
                type='checkbox'
                onChange={(e) => handleChange(e.target.checked, item.prefCode)}
              />
              <span className='app-prefectures-name'>{item.prefName}</span>
            </label>
          )
        })}
      </div>
      <div className='container-chart'>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'chart'}
          options={options}
        />
      </div>
    </div>
  )
}

export default App
