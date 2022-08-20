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
    return await res.json().then((res) => res.result)
  }
}

export default new Pref()
