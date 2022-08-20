const baseUrl = "https://opendata.resas-portal.go.jp/api/v1"

const get = async (path: string) => {
  const res = await fetch(baseUrl + path, {
    method: "GET",
    headers: {
      "X-API-KEY": "Kzjb2lIu0Kfyv1rwZGhcuAaF706Y9n9MncX5Ivyg",
    },
  })
  return res.json()
}

export const getPrefectures = () => get("/prefectures").then((res) => res.result)

export const getPopulation = (code: number) => get(`/population/composition/perYear?prefCode=${code}`).then((res) => res.result.data)