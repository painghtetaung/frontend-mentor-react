const base_api = 'https://restcountries.com/v3.1/';

const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

const apiSettings = {
    fetchCountries: async (searchName) => {
        const endpoint = searchName 
            ? `${base_api}name/${searchName}` 
            : `${base_api}all`;
        return await (await fetch(endpoint)).json();
    },
}

export default apiSettings;