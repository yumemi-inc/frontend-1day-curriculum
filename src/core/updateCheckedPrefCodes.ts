export const updateCheckedPrefCodes = (
  checkd: boolean,
  prefCode: number,
  checkedPrefCodes: number[],
) => {
  if (checkd) {
    // チェックを付けたとき
    if (!checkedPrefCodes.includes(prefCode)) {
      return [...checkedPrefCodes, prefCode]
    }
  } else {
    // チェックを外したとき
    return checkedPrefCodes.filter((v) => v !== prefCode)
  }
}
