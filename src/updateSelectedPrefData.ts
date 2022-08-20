import { CheckedPrefData } from "./App"
import getPopData from "./components/popAPI"

export const updateSelectedPrefData = async (
  checked: boolean,
  prefCode: number,
  checkedPrefData: CheckedPrefData[],
) => {
  let newCheckedPrefData = [...checkedPrefData] // returnされる
  if (checked) {
    if (!checkedPrefData?.find((value) => value.prefCode === prefCode)) {
      const prefData = await getPopData.FetchPop(prefCode)
      console.log(prefData)
      newCheckedPrefData.push({
        prefCode: prefCode,
        prefData: prefData,
      })
    }
  } else {
    newCheckedPrefData = checkedPrefData.filter(
      (value) => value.prefCode !== prefCode,
    )
  }
  return newCheckedPrefData
}
