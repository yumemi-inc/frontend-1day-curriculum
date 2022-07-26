type PopulationResponse = {
  message: string,
  result: {
    boundaryYear: number,
    data: [
      { label: "総人口", data: { year: number, value: number }[] },
      { label: "年少人口", data: { year: number, value: number }[] },
      { label: "生産年齢人口", data: { year: number, value: number }[] },
      { label: "老年人口", data: { year: number, value: number }[] },
    ]
  }
}
export const fetchPopulation = async (code: number) => {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
    {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      },
    }
  )
  return res.json().then((res: PopulationResponse) => res.result.data);
};
