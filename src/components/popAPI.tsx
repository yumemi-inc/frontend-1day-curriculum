type PopulationApiResponse = [
  {
    label: "総人口"
    data: { year: number; value: number }[]
  }
  // 総人口以外の型定義は省略
]


class Pop {
  FetchPop = async (code: number): Promise<PopulationApiResponse> => {
    const res = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": process.env.REACT_APP_API_KEY,
        },
      },
    )
    return await res.json().then((res) => res.result.data)
  }
}

export default new Pop()
