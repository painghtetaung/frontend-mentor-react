const base_api = 'https://restcountries.com/v3.1/';

const apiSettings = {
    fetchCountries: async(searchName) => {
        const endpoint = searchName ?
            `${base_api}name/${searchName}` :
            `${base_api}all`;
        return await (await fetch(endpoint)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Country Not Found")
                } else {
                    return res;
                }

            })
        ).json();
    },
}

export default apiSettings;