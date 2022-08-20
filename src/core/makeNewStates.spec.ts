import { makeNewStates } from "./makeNewStates"

describe("makeNewStates", () => {
  test("not checked", async () => {
    const response = await makeNewStates(false, 47, [], new Map())
    expect(response).toEqual({
      fetchedNewLoadData: new Map(),
      newCheckedPrefCodes: [],
    })
  })
})

export {}
