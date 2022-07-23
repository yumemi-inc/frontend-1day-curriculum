import {fetchAPI} from "./fetchAPI";

export const fetchPrefectures = async () => {
    const res = await fetchAPI('https://opendata.resas-portal.go.jp/api/v1/prefectures')
    const result = await res.json()
    return result.result
}
