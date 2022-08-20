import { PopulationResponse } from "../types/resas"

function isPopulationResponse(data: any): data is PopulationResponse {
  if (!("message" in data) || !("result" in data)) return false
  return true
}

class Pop {
  FetchPop = async (code: number) => {
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
}

export default new Pop()
