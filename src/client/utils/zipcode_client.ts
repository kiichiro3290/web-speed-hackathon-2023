export const zipCodeApi = {
    fetchZipCode: async (zipCode: string) => {
        const baseUrl = 'http://localhost:8080/zipcode';
    
        const data = await fetch(`${baseUrl}?zipcode=${zipCode}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => data.results)
        .catch((e) => console.log(e));
    
        return data
    }
}