import { PrefectureResponse } from "../types/resas"

function isPrefectureResponse(data: any): data is PrefectureResponse {
  if (!("message" in data) || !("result" in data)) return false
  return true
}

class Pref {
  GetPref = async () => {
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
}

export default new Pref()
