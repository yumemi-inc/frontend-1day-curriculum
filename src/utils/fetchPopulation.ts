import {fetchAPI} from "./fetchAPI";

export const fetchPopulation = async (code: number) => {
    const res = await fetchAPI(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`)
    const result = await res.json()
    return result.result.data
}