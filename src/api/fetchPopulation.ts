import { resasFetcher } from "./resasFetcher"

export const fetchPopulation = async (prefCode: number) => {
  const res = await resasFetcher(
    `population/composition/perYear?prefCode=${prefCode}`,
    "GET",
  )
  
  const population = (await res.json()).result.data
  
  return population
}
