import { SelectedPrefData } from "./App"
import getPopData from "./components/popAPI"

export const updateSelectedPrefData = async (
  selected: boolean,
  prefCode: number,
  selectedPrefData: SelectedPrefData[],
) => {
  let newSelectedPrefData = [...selectedPrefData] // returnされる
  if (selected) {
    if (!selectedPrefData?.find((value) => value.prefCode === prefCode)) {
      const prefData = await getPopData.FetchPop(prefCode)
      console.log(prefData)
      newSelectedPrefData.push({
        prefCode: prefCode,
        prefData: prefData,
      })
    }
  } else {
    newSelectedPrefData = selectedPrefData.filter(
      (value) => value.prefCode !== prefCode,
    )
  }
  return newSelectedPrefData
}
