import './App.css'
import { useState, useEffect, useMemo } from 'react'
import getPrefData from './api/prefAPI'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
import { makeNewStates } from './makeNewStates'
import { LabeledCheckBox } from './components/LabeledCheckBox'

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

  const graphData: { name: string; data: number[] }[] = useMemo(() => {
    const checkedPrefectures: PrefData[] = checkedPrefCodes.map((code) =>
      prefectures.find((pref) => pref.prefCode === code)
    )

    const loadedPrefectures: PrefData[] = checkedPrefectures.filter(
      (pref) => pref !== undefined && loadedPrefData.has(pref.prefCode)
    )

    return loadedPrefectures.map((pref) => ({
      name: pref!.prefName,
      data: [...loadedPrefData.get(pref!.prefCode)!],
    }))
  }, [checkedPrefCodes, loadedPrefData, prefectures])

  // NOTE: 型を入れたかったが、エラーが起きて時間がかかりそうだったのでパス
  const highchartsOptions = {
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

  const handleCheckedPrefChange = (checked: boolean, prefCode: number) => {
    // TODO: 名前にもう少し情報含まれてて欲しい
    makeNewStates(checked, prefCode, checkedPrefCodes, loadedPrefData).then(
      (res) => {
        setCheckedPrefCodes(res.newCheckedPrefCodes)
        setLoadedPrefData(res.fetchedNewLoadData)
      }
    )
  }

  return (
    <div className='page-container'>
      <h1 className='page-title'>
        <span>都道府県別の総人口推移グラフ</span>
      </h1>
      <section>
        <h2 className='section-title'>
          <span>都道府県</span>
        </h2>
        <ul className='app-prefectures-list'>
          {prefectures?.map((item) => {
            return (
              <li key={item.prefCode} className='app-prefectures-list-item'>
                <LabeledCheckBox
                  label={item.prefName}
                  onChange={(e) => handleCheckedPrefChange(e.target.checked, item.prefCode)}
                />
              </li>
            )
          })}
        </ul>
      </section>
      <section aria-label='人口構成'>
        <div className='container-chart'>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'chart'}
            options={highchartsOptions}
          />
        </div>
      </section>
    </div>
  )
}

export default App
