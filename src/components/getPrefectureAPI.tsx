export const GetPrefecture = async () => {
  const res = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': 'Kzjb2lIu0Kfyv1rwZGhcuAaF706Y9n9MncX5Ivyg',
      },
    },
  );
  return await res.json().then((res) => res.result);
};
