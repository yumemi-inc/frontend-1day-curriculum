import "./App.css"
import { useState, useEffect } from "react"
import getPrefData from "./components/prefAPI"
import { makeNewStates } from "./makeNewStates"
import { PopulationGraphData, PrefData } from "./types"
import { PrefectureCheckbox } from "./components/PrefectureCheckbox/"
import { PopulationGraph } from "./components/PopulationGraph"

const App: React.FC = () => {
  const [prefAry, setPrefAry] = useState<PrefData[]>([])
  const [checkedPrefCodes, setCheckedPrefCodes] = useState<number[]>([])
  const [loadedPrefData, setLoadedPrefData] = useState(
    new Map<number, number[]>(),
  )

  const graphData: PopulationGraphData[] = checkedPrefCodes
    .map((code) => prefAry.find((pref) => pref.prefCode === code))
    .filter((pref): pref is PrefData => pref != null)
    .map((pref) => [pref.prefName, loadedPrefData.get(pref.prefCode)] as const)
    .filter((record): record is readonly [string, number[]] => record[1] != null)
    .map(([prefName, prefPopulations]) => ({
      name: prefName,
      data: Array.from(prefPopulations),
    }))

  useEffect(() => {
    getPrefData.GetPref().then((data) => setPrefAry(data))
  }, [])

  const handleChange = (checked: boolean, prefCode: number) => {
    makeNewStates(checked, prefCode, checkedPrefCodes, loadedPrefData).then(
      (res) => {
        setCheckedPrefCodes(res.newCheckedPrefCodes)
        setLoadedPrefData(res.fetchedNewLoadData)
      },
    )
  }

  return (
    <div className='container'>
      <div className='h1 container-title'>
        <span>都道府県別の総人口推移グラフ</span>
      </div>
      <div className='h3 container-main'>
        <span>都道府県</span>
      </div>

      <div className='app-prefectures-list-container'>
        {prefAry?.map((item) =>
          // 伸び代: 初めてチェックするチェックボックスの時に素早く連続で他のをチェックするとうまく動かない
          (
            <PrefectureCheckbox key={item.prefCode} name={item.prefName} onChange={(e) => handleChange(e.target.checked, item.prefCode)} />
          ),
        )}
      </div>
      <div className='container-chart'>
        <PopulationGraph
          graphData={graphData}
        />
      </div>
    </div>
  )
}

export default App
