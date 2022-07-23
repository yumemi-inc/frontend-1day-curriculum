import { makeNewStates } from './makeNewStates'

// 伸び代：テストケース少ない。全チェックなしの場合しかテストしてない
// チェックありの場合とかもテストしたい
describe('makeNewStates', () => {
  test('not checked', async () => {
    const response = await makeNewStates(false, 47, [], new Map())
    expect(response).toEqual({
      fetchedNewLoadData: new Map(),
      newCheckedPrefCodes: [],
    })
  })
})

export {}
