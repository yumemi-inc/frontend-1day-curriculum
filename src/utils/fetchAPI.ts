export const fetchAPI = async (url: string) => {
    return await fetch(
        url,
        {
            method: 'GET',
            headers: {
                'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
            },
        }
    )
}
