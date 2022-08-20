import { PrefectureResponse, PopulationResponse } from "../types/resas"

function isPrefectureResponse(data: any): data is PrefectureResponse {
  if (!("message" in data) || !("result" in data)) return false
  return true
}

export const fetchPrefecture = async () => {
  const res = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    },
  )
  const resData = await res.json()
  if (!isPrefectureResponse(resData)) {
    return undefined
  }
  return resData.result
}

function isPopulationResponse(data: any): data is PopulationResponse {
  if (!("message" in data) || !("result" in data)) return false
  return true
}

export const fetchPopulation = async (code: number) => {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    },
  )
  const resData = await res.json()
  if (!isPopulationResponse(resData)) {
    return undefined
  }
  const { data: population } = resData.result
  return population
}
