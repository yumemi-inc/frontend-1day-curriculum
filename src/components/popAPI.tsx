class Pop {
  FetchPop = async (code: number) => {
    const res = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'Kzjb2lIu0Kfyv1rwZGhcuAaF706Y9n9MncX5Ivyg',
        },
      }
    )
    return await res.json().then((res) => res.result.data);
  };
}

export default new Pop();
