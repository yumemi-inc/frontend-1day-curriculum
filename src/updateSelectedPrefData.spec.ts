import { updateSelectedPrefData } from "./updateSelectedPrefData"

describe("updateSelectedPrefData", () => {
  test("not checked", async () => {
    const response = await updateSelectedPrefData(false, 47, [], new Map())
    expect(response).toEqual({
      fetchedNewLoadData: new Map(),
      newCheckedPrefCodes: [],
    })
  })
})

export {}
