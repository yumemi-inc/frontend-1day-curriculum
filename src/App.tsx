import { useEffect, useState } from "react"
import { fetchPopulation, fetchPrefecture } from "./api/resas"
import "./App.css"
import { PopulationGraph } from "./components/PopulationGraph"
import { PrefectureCheckbox } from "./components/PrefectureCheckbox"
import { checksPrefeture, newPrefectureState, PrefectureState, StateMap, unchecksPrefeture } from "./states"

const App: React.FC = () => {
  const [stateMap, setStateMap] = useState<StateMap | undefined>()

  const [years, setYears] = useState<number[] | undefined>()

  const graphData: { data: number[]; name: string }[] = (stateMap ? Array.from(stateMap) : [])
    .flatMap(([_key, value]) => {
      if (!value.checked || value.populationValue === undefined) {
        return []
      }

      return [{ data: [...value.populationValue], name: value.prefecture.prefName }]
    })

  /*
    .map((code) => prefAry.find((pref) => pref.prefCode === code))
    .filter((pref) => pref !== undefined && loadedPrefData.has(pref.prefCode))
    .map((pref) => ({
      name: pref!.prefName,
      data: [...loadedPrefData.get(pref!.prefCode)!],
    }))
    */

  useEffect(() => {
    fetchPopulation(1).then((popres) =>
      setYears(popres[0].data.map((prefs) => prefs.year)),
    )
    // fetchPrefecture().then((data) => setPrefAry(data))

    fetchPrefecture().then((data) => {
      const kvs = data.map(({prefCode, prefName}): [number, PrefectureState] => [prefCode, newPrefectureState({ prefCode, prefName })] )
      setStateMap(new Map(kvs))
    })
  }, [])

  const handleChange = async (checked: boolean, prefCode: number) => {

    /*
    makeNewStates(checked, prefCode, checkedPrefCodes, loadedPrefData).then(
      (res) => {
        setCheckedPrefCodes(res.newCheckedPrefCodes)
        setLoadedPrefData(res.fetchedNewLoadData)
      },
    )
    */

    if (stateMap  == undefined) {
      return
    }

    const newState = checked ? await checksPrefeture(prefCode, stateMap) : unchecksPrefeture(prefCode, stateMap)
    setStateMap(newState)
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
        {Array.from(stateMap?.values() ?? []).map((item) => {
          return (
            <PrefectureCheckbox
              key={item.prefecture.prefCode}
              prefecture={item.prefecture}
              onChange={(e) => handleChange(e.target.checked, item.prefecture.prefCode)}
            />
          )
        })}
      </div>
      <PopulationGraph years={years} graphData={graphData} />
    </div>
  )
}

export default App
