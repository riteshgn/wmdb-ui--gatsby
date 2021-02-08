import { sendRequest } from './requests.utils';

/**
 * An abstraction layer for making AJAX calls
 */

const Requests = {
    get
}

export default Requests;

//////////////////////////////////////////////////////////////

function get(url) {
    return sendRequest({ method: 'get', url });
}