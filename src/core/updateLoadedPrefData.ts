import { fetchPopulation } from "../api/fetchPopulation"

interface PopulationData {
  year: number
  value: number
}

export const updateLoadedPrefData = async (
  prefCode: number,
  loadedPrefData: Map<number, number[]>,
) => {
  if (loadedPrefData.has(prefCode)) {
    // 追加済みの場合
    return loadedPrefData
  }

  const res = await fetchPopulation(prefCode)

  const newLoadedData = new Map(loadedPrefData)
  newLoadedData.set(
    prefCode,
    res[0].data.map((populationData: PopulationData) => populationData.value),
  )

  return newLoadedData
}
