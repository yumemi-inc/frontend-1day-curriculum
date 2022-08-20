import getPopData from "./components/popAPI"

const fetchNewData = async (  
  checked: boolean,
  prefCode: number,
  loadedPrefData: Map<number, number[]>,
) => {
  if (!checked || loadedPrefData.has(prefCode)) return loadedPrefData

  const res = await getPopData.FetchPop(prefCode)
  const newLoadedData = new Map(loadedPrefData)
  newLoadedData.set(
    prefCode,
    res[0].data.map((item: any) => item.value),
  )

  return newLoadedData
}

export const makeNewStates = async (
  checked: boolean,
  prefCode: number,
  checkedPrefCodes: number[],
  loadedPrefData: Map<number, number[]>,
) => {
  const fetchedNewLoadData = await fetchNewData(checked, prefCode, loadedPrefData)

  const newStates = {
    newCheckedPrefCodes: checkedPrefCodes,
    fetchedNewLoadData,
  }

  // チェックが入った場合
  if (checked) {
    if (!checkedPrefCodes.includes(prefCode)) {
      newStates.newCheckedPrefCodes = [...checkedPrefCodes, prefCode]
    }

  // チェックが外れた場合
  } else {
    newStates.newCheckedPrefCodes = checkedPrefCodes.filter(
      (code) => code !== prefCode,
    )
  }
  return newStates
}
