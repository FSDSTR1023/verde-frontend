
export const customFetch = ({ path, method, data, token }) => {

    const be = import.meta.env.VITE_BACKEND_URL;

    const url = be + path;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    token && headers.append('Authorization', `Bearer ${token}`);

    const body = data && JSON.stringify(data);

    return fetch(url, { method, headers, body });
}
