import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import NoDataToDisplay from "highcharts/modules/no-data-to-display"
import { PopulationGraphData } from "../../types"

export type PopulationGraphProps = {
  graphData: PopulationGraphData[];
};

NoDataToDisplay(Highcharts)

export const PopulationGraph: React.FC<PopulationGraphProps> = ({
  graphData,
}) => {
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

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"chart"}
      options={options}
    />
  )
}
