import getPopData from "./components/popAPI";

// チェック状態の更新、データの状態の更新に分けられそう
// カスタムフックにするとうまくできるかも知れない
export const makeNewStates = async (
  checked: boolean,
  prefCode: number,
  checkedPrefCodes: number[],
  loadedPrefData: Map<number, number[]>
) => {
  const newStates = {
    newCheckedPrefCodes: checkedPrefCodes,
    fetchedNewLoadData: loadedPrefData,
  };

  if (!checked) {
    newStates.newCheckedPrefCodes = checkedPrefCodes.filter(
      (code) => code !== prefCode
    );
    return newStates;
  }

  if (!checkedPrefCodes.includes(prefCode)) {
    newStates.newCheckedPrefCodes = [...checkedPrefCodes, prefCode];
  }

  if (!loadedPrefData.has(prefCode)) {
    const res = await getPopData.FetchPop(prefCode);

    let newLoadedData = new Map(loadedPrefData);
    newLoadedData.set(
      prefCode,
      res[0].data.map((item: any) => item.value)
    );

    newStates.fetchedNewLoadData = newLoadedData;
  }
  return newStates;
};
