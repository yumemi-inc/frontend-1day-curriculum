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

const updateCheckedPrefCodes = (
  checked: boolean,
  prefCode: number,
  checkedPrefCodes: number[],
) => {
  if (!checked) return checkedPrefCodes.filter((code) => code !== prefCode)

  if (!checkedPrefCodes.includes(prefCode)) {
    return [...checkedPrefCodes, prefCode]
  }

  return checkedPrefCodes 
}

export const makeNewStates = async (
  checked: boolean,
  prefCode: number,
  checkedPrefCodes: number[],
  loadedPrefData: Map<number, number[]>,
) => {
  const fetchedNewLoadData = await fetchNewData(checked, prefCode, loadedPrefData)
  const newCheckedPrefCodes = updateCheckedPrefCodes(checked,prefCode, checkedPrefCodes)

  const newStates = {
    newCheckedPrefCodes,
    fetchedNewLoadData,
  }

  return newStates
}
