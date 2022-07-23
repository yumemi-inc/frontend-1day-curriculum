export type PrefData = {
  prefCode: number
  prefName: string
}

type PrefectureResponse = {
  message: string,
  result: PrefData[]
}

export const fetchPrefectures = async () => {
    const res = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.REACT_APP_API_KEY,
        },
      }
    )
  return res.json().then((res: PrefectureResponse) => res.result);
};