import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth/next"

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        console.log(url)
        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

async function authHeader(url) {
    //TODO: Add JWT token to auth header
    const session = await getServerSession(authOptions)
    const userId = session?.user.id;
    return { userId: userId };
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
        if ([401, 403].includes(response.status) && userService.userValue) {
            //TODO: logout if 401 Unauthorized or 403 Forbidden response returned from api
        }

        // get error message from body or default to response status
        const error = (data && data.message) || response.statusText;
        console.log(error)
        return Promise.reject(error);
    }

    return data;
}