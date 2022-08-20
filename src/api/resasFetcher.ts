const endpoint="https://opendata.resas-portal.go.jp/api/v1/"

export const resasFetcher = async (path: string, method: string) => {
  const res = await fetch(
    `${endpoint}${path}`,
    {
      method: method,
      headers: {
        "X-API-KEY": process.env.REACT_APP_X_API_KEY,
      },
    },
  )

  return res
}