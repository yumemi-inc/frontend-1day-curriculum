import {FetchPopulation} from './components/fetchPopulationAPI';

export const makeNewStates = async (
  checked: boolean,
  newCheckedPrefCode: number,
  checkedPrefCodes: number[],
  loadedPrefDataCache: Map<number, number[]>,
) => {
  const newStates = {
    newCheckedPrefCodes: checkedPrefCodes,
    fetchedNewLoadDataCache: loadedPrefDataCache,
  };

  if (checked && !loadedPrefDataCache.has(newCheckedPrefCode)) {
    newStates.fetchedNewLoadDataCache = await updateLoadedDataCache(newCheckedPrefCode, loadedPrefDataCache);
  }

  newStates.newCheckedPrefCodes = updateCheckedPrefCodes(checked, checkedPrefCodes, newCheckedPrefCode);

  return newStates;
};

const updateLoadedDataCache = async (newCheckedPrefCode: number, loadedPrefDataCache: Map<number, number[]>) => {
  const res = await FetchPopulation(newCheckedPrefCode);
  const newLoadedData = new Map(loadedPrefDataCache);
  newLoadedData.set(
    newCheckedPrefCode,
    res[0].data.map((item: any) => item.value),
  );
  return newLoadedData;
}

const updateCheckedPrefCodes = (checked: boolean, checkedPrefCodes:number[], newCheckedPrefCode: number) => {
  if (checked) {
    if (!checkedPrefCodes.includes(newCheckedPrefCode)) {
      return [...checkedPrefCodes, newCheckedPrefCode];
    }
  } else {
    return checkedPrefCodes.filter(
      (code) => code !== newCheckedPrefCode,
    );
  }
}