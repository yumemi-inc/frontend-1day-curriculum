import { useState, useEffect, useCallback } from 'react'

import './App.css'
import { fetchPrefectures, PrefData } from './features/prefecture'
import { makeNewStates } from './makeNewStates'
import { PopulationChart } from './components/PopulationChart'

const App: React.FC = () => {
  const [prefAry, setPrefAry] = useState<PrefData[]>([]) // マスタデータ
  const [checkedPrefCodes, setCheckedPrefCodes] = useState<number[]>([])
  const [loadedPrefData, setLoadedPrefData] = useState(
    new Map<number, number[]>()
  )

  const graphData: { data: number[]; name: string }[] = checkedPrefCodes
    // FIXME: map → find
    .map((code) => prefAry.find((pref) => pref.prefCode === code))
    // FIXME: === for undefined
    .filter((pref) => pref !== undefined && loadedPrefData.has(pref.prefCode))
    .map((pref) => ({
      // FIXME: ! は使いたくない
      name: pref!.prefName,
      data: [...loadedPrefData.get(pref!.prefCode)!],
    }))



  useEffect(() => {
    fetchPrefectures().then((data) => setPrefAry(data))
  }, [])

  const handleChange = useCallback((checked: boolean, prefCode: number) =>
    makeNewStates(checked, prefCode, checkedPrefCodes, loadedPrefData).then(
      (res) => {
        setCheckedPrefCodes(res.newCheckedPrefCodes)
        setLoadedPrefData(res.fetchedNewLoadData)
      }), [setCheckedPrefCodes, setLoadedPrefData]
  );

  return (
    <div className='container'>
      <div className='h1 container-title'>
        <span>都道府県別の総人口推移グラフ</span>
      </div>
      {/* FIXME: h2どこいった!!!!!! */}
      <div className='h3 container-main'>
        <span>都道府県</span>
      </div>

      <div className='app-prefectures-list-container'>
        {prefAry?.map((item) => {
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
        <PopulationChart graphData={graphData} />
      </div>
    </div>
  )
}

export default App
