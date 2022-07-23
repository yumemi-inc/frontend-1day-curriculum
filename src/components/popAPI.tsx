class Pop {
  FetchPop = async (code: number) => {
    const res = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
    const result = await res.json()
    return result.result.data
  };
}

export default new Pop();
