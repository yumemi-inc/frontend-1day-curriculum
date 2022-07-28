import getPopData from "./components/popAPI"

export const makeNewStates = async (
  checked: boolean,
  prefCode: number,
  checkedPrefCodes: number[],
  loadedPrefData: Map<number, number[]>,
) => {
  const newStates = {
    newCheckedPrefCodes: checkedPrefCodes,
    fetchedNewLoadData: loadedPrefData,
  }
  if (checked) {
    if (!checkedPrefCodes.includes(prefCode)) {
      newStates.newCheckedPrefCodes = [...checkedPrefCodes, prefCode]
    }
    if (!loadedPrefData.has(prefCode)) {
      const res = await getPopData.FetchPop(prefCode)

      const newLoadedData = new Map(loadedPrefData)
      newLoadedData.set(
        prefCode,
        res[0].data.map((item: any) => item.value),
      )

      newStates.fetchedNewLoadData = newLoadedData
    }
    return newStates
  } else {
    newStates.newCheckedPrefCodes = checkedPrefCodes.filter(
      (code) => code !== prefCode,
    )
    return newStates
  }
}
