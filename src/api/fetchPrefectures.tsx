import { resasFetcher } from "./resasFetcher"

export const fetchPrefectures = async () => {
  const res = await resasFetcher(
    "prefectures",
    "GET",
  )
  
  const prefectures = (await res.json()).result
  
  return prefectures
}
