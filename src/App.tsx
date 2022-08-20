import "./App.css"
import { fetchPopulation, fetchPrefecture } from "./api/resas"
import { PopulationGraph } from "./components/PopulationGraph"
import { makeNewStates } from "./makeNewStates"
import { useState, useEffect } from "react"

type PrefData = {
  prefCode: number
  prefName: string
}

const App: React.FC = () => {
  const [prefAry, setPrefAry] = useState<PrefData[]>([])
  const [checkedPrefCodes, setCheckedPrefCodes] = useState<number[]>([])
  const [loadedPrefData, setLoadedPrefData] = useState(
    new Map<number, number[]>(),
  )

  const [years, setYears] = useState<number[] | undefined>()

  const graphData: { data: number[]; name: string }[] = checkedPrefCodes
    .map((code) => prefAry.find((pref) => pref.prefCode === code))
    .filter((pref) => pref !== undefined && loadedPrefData.has(pref.prefCode))
    .map((pref) => ({
      name: pref!.prefName,
      data: [...loadedPrefData.get(pref!.prefCode)!],
    }))

  useEffect(() => {
    fetchPopulation(1).then((popres) =>
      setYears(popres[0].data.map((prefs) => prefs.year)),
    )
    fetchPrefecture().then((data) => setPrefAry(data))
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
    <div className="container">
      <div className="h1 container-title">
        <span>都道府県別の総人口推移グラフ</span>
      </div>
      <div className="h3 container-main">
        <span>都道府県</span>
      </div>

      <div className="app-prefectures-list-container">
        {prefAry?.map((item) => {
          return (
            <label key={item.prefCode} className="app-prefectures-list">
              <input
                className="app-prefectures-list-checkbox"
                type="checkbox"
                onChange={(e) => handleChange(e.target.checked, item.prefCode)}
              />
              <span className="app-prefectures-name">{item.prefName}</span>
            </label>
          )
        })}
      </div>
      <PopulationGraph years={years} graphData={graphData} />
    </div>
  )
}

export default App
