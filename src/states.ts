import { Prefecture } from "./types/resas"
import { fetchPopulation } from "./api/resas"

export type PrefectureState = {
  prefecture: Prefecture,
  checked: boolean,
  // seriesにわたすデータ
  // TODO: あとでYearsと一緒に扱うようにする
  populationValue?: number[],
}

export const newPrefectureState = (prefecture: Prefecture): PrefectureState => {
  return {
    prefecture,
    checked: false,
    populationValue: undefined,
  }
}

export type StateMap = Map<number, PrefectureState>

export const checksPrefeture = async (
  prefCode: number,
  states: StateMap,
): Promise<StateMap> => {

  const pref = states.get(prefCode)
  if (pref === undefined) {
    throw new Error(`Pref code ${prefCode} not found`)
  }

  pref.checked = true
  if (pref.populationValue === undefined) {
    const res = await fetchPopulation(prefCode)
    pref.populationValue = res[0].data.map((d) => d.value)
  }

  return new Map(states)
}

export const unchecksPrefeture = (
  prefCode: number,
  states: StateMap,
): StateMap => {
  const pref = states.get(prefCode)
  if (pref === undefined) {
    throw new Error(`Pref code ${prefCode} not found`)
  }

  pref.checked = false

  return new Map(states)
}