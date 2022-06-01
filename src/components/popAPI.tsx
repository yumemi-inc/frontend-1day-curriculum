class Pop {
  FetchPop = async (code: number) => {
    const res = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'Jn3AE3RZQGYg5YL6czBKSiOeDBYfQ5zJsgh890Mp',
        },
      }
    )
    return await res.json().then((res) => res.result.data);
  };
}

export default new Pop();
