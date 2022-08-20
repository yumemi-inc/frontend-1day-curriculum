import { getPopulation } from "./api/api"

export const fetchNewData = async (  
  checked: boolean,
  prefCode: number,
  loadedPrefData: Map<number, number[]>,
) => {
  if (!checked || loadedPrefData.has(prefCode)) return loadedPrefData

  const res = await getPopulation(prefCode)
  const newLoadedData = new Map(loadedPrefData)
  newLoadedData.set(
    prefCode,
    res[0].data.map((item: any) => item.value),
  )

  return newLoadedData
}

export const updateCheckedPrefCodes = (
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
