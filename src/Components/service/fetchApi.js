const fetchApi = query => {
  return fetch(`https://restcountries.eu/rest/v2/name/${query}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.error(error));
};

export default fetchApi;
