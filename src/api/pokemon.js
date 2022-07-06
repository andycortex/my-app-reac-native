import { API_HOST } from '../utils/constants';

export async function getPokemonApi(endpointUrl) {
    console.log(endpointUrl);
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;
    }catch (e) {
        throw e;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch (err) {
        throw err;
    }
}