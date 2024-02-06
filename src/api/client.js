import { customFetch } from '../helper/customFetch';

export class Client {

    token;

    constructor() {
        this.token = localStorage?.getItem('token');
    }

    register = async (data) => {
        try {
            const response = await customFetch({
                path: '/client/register',
                method: 'POST',
                data,
                token: this.token,
            });

            const client = await response.json();

            return client;

        } catch (error) {
            console.trace(error);
        }
    }

}