import "./App.css"
import { useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import NoDataToDisplay from "highcharts/modules/no-data-to-display"
import { updateCheckedPrefCodes, fetchNewData } from "./makeNewStates"
import { CheckBox } from "./components/CheckBox"
import { usePrefectures } from "./usePrefectures"

// 「表示するデータがありません」などのメッセージを表示するため
NoDataToDisplay(Highcharts)

const App: React.FC = () => {
  const prefectures = usePrefectures()
  const [checkedPrefectureCodes, setCheckedPrefectureCodes] = useState<number[]>([])
  const [cachedPrefecturesData, setCachedPrefecturesData] = useState(
    new Map<number, number[]>(),
  )

  const graphData: { data: number[]; name: string }[] = 
  prefectures
    .filter((prefecture) => checkedPrefectureCodes.includes(prefecture.prefCode) && cachedPrefecturesData.has(prefecture.prefCode))
    .map((pref) => ({
      name: pref.prefName,
      data: [...cachedPrefecturesData.get(pref.prefCode)],
    }))

  const options = {
    chart: {
      type: "spline",
      backgroundColor: "#fff",
      polar: true,
    },
    title: {
      text: "人口構成",
    },
    lang: {
      noData: "データがありません",
    },
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030",
      },
    },
    xAxis: {
      /* APIが返してくる年度はこれだった */
      categories: [
        "1960",
        "1965",
        "1970",
        "1975",
        "1980",
        "1985",
        "1990",
        "1995",
        "2000",
        "2005",
        "2010",
        "2015",
        "2020",
        "2025",
        "2030",
        "2035",
        "2040",
        "2045",
      ],
      offset: 0,
      title: {
        text: "年度",
        align: "high",
        textAlign: "left",
        rotation: 0,
        offset: 0,
        margin: 0,
        y: 30,
        x: -27,
      },
    },
    yAxis: {
      visible: true,
      tickPosition: "inside",
      offset: 0,
      title: {
        text: "人口数",
        align: "high",
        textAlign: "left",
        rotation: 0,
        offset: 0,
        margin: 0,
        y: -20,
        x: -47,
      },
    },
    series: graphData,
  }

  const handleChange = async (checked: boolean, prefCode: number) => {
    setCheckedPrefectureCodes(updateCheckedPrefCodes(checked, prefCode, checkedPrefectureCodes))
    setCachedPrefecturesData(await fetchNewData(checked, prefCode, cachedPrefecturesData))
  }

  return (
    <div className='container'>
      <h1 className='container-title'>都道府県別の総人口推移グラフ</h1>
      <h3 className='container-main'>都道府県</h3>

      <div className='app-prefectures-list-container'>
        {prefectures?.map((item) => {
          return (
            <CheckBox key={item.prefCode} label={item.prefName} onChange={(e) => handleChange(e.target.checked, item.prefCode)} />
          )
        })}
      </div>
      <div className='container-chart'>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"chart"}
          options={options}
        />
      </div>
    </div>
  )
}

export default App
