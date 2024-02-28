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

    getAll = async () => {
        try {
            const response = await customFetch({
                path: "/client/getAll",
                token: this.token,
            })

            return response;
        } catch (error) {
            console.trace(error);
        }
    }

    getById = async (id) => {
        try {
            const response = await customFetch({
                path: `/client/${id}`,
                token: this.token,
            })

            return response;
        } catch (error) {
            console.trace(error);
        }
    }

    edit = async (id, data) => {
        try {
            const response = await customFetch({
                path: `/client/${id}`,
                method: 'PUT',
                data,
                token: this.token,
            })

            return response;
        } catch (error) {
            console.trace(error);
        }
    }

    delete = async (id) => {
        try {
            const response = await customFetch({
                path: `/client/${id}`,
                method: 'DELETE',
                token: this.token,
            })

            return response;
        } catch (error) {
            console.trace(error);
        }
    }

}