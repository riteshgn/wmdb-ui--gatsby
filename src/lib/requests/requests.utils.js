import axios from 'axios';

export async function sendRequest({ method, url, data }) {
    try {
        const response = await axios({ method, url, data });
        // console.log(`[${method} ${url}] \n ${JSON.stringify(response.data)}`);
        return response.data;
    }
    catch (error) {
        console.log(`[${method} ${url}] ${error}`);
        return null;
    }
}