export const fetchZipCode = async (zipCode: string) => {
    const baseUrl = 'https://zipcloud.ibsnet.co.jp/api/search';
    const data = await fetch(`${baseUrl}?zipcode=${zipCode}`, {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    method: 'GET',
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return res
    })
    .catch((e) => console.log(e));

    return data
}