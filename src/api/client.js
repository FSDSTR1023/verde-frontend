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

            return response;

        } catch (error) {
            console.trace(error);
        }
    }

    getById = async (id) => {
        try {
            const response = await customFetch({
                path: `/client/get/${id}`,
                token: this.token,
            })

            return response;
        } catch (error) {
            console.trace(error);
        }
    }

}