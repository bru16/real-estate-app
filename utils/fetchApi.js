import axios from 'axios'

export const BASE_URL = "https://bayut.p.rapidapi.com"

export const fetchAPI = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1b1caee4d7msh3e631d34fb3cfadp1adc5cjsn07d91a084c1e'
        }
    })
    return data;
}