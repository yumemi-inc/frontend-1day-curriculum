import "./App.css"
import { useState, useEffect } from "react"
import getPrefData from "./components/prefAPI"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import NoDataToDisplay from "highcharts/modules/no-data-to-display"
import { makeNewStates } from "./makeNewStates"
import { ChkBx01 } from "./components/ChkBx01"

NoDataToDisplay(Highcharts)

type PrefData = {
  prefCode: number;
  prefName: string;
};

export type CheckedPrefData = {
  prefCode: number;
  prefData: number[];
};

const App: React.FC = () => {
  const [prefAry, setPrefAry] = useState<PrefData[]>([])
  const [checkedPrefData, setCheckedPrefData] = useState<CheckedPrefData[]>([])

  const graphData: { data: number[]; name: string }[] = checkedPrefData
    .filter(
      (pref) =>
        pref !== undefined &&
        prefAry.find((value) => value.prefCode === pref.prefCode),
    )
    .map((data) => {
      const prefData = prefAry.find((pref) => pref.prefCode === data.prefCode)
      return {
        name: prefData!.prefName,
        data: data.prefData,
      }
    })

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

  useEffect(() => {
    getPrefData.GetPref().then((data) => setPrefAry(data))
  }, [])

  const handleChange = (checked: boolean, prefCode: number) => {
    // console.log(checked);
    // console.log(prefCode);
    makeNewStates(checked, prefCode, checkedPrefData).then((res) => {
      /*setCheckedPrefCodes(res.newCheckedPrefCodes)
        setLoadedPrefData(res.fetchedNewLoadData)*/
      console.log(res)
      setCheckedPrefData(res)
    })
  }

  return (
    <div className="container">
      <div className="h1 container-title">
        <span>都道府県別の総人口推移グラフ</span>
      </div>
      <div className="h3 container-main">
        <span>都道府県</span>
      </div>

      <div className="app-Prefs-list-container">
        {prefAry?.map((item) => {
          return (
            <ChkBx01
              key={item.prefCode}
              name={item.prefName}
              onChange={(e) => handleChange(e, item.prefCode)}
              checked={
                checkedPrefData?.find(
                  (value) => value.prefCode === item.prefCode,
                ) !== undefined
              }
            />
          )
        })}
      </div>
      <div className="container-chart">
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
