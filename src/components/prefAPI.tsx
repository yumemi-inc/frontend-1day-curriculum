class Pref {
  GetPref = async () => {
    const res = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'Jn3AE3RZQGYg5YL6czBKSiOeDBYfQ5zJsgh890Mp',
        },
      }
    )
    return await res.json().then((res) => res.result);
  };
}

export default new Pref();
