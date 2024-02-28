import { customFetch } from '../helper/customFetch';

export class Email {

    token;

    constructor() {
        this.token = localStorage?.getItem('token');
    }

    sender = async (data) => {
        try {
            const response = await customFetch({
                path: '/email/sender',
                method: 'POST',
                data,
                token: this.token,
            });

            return response;

        } catch (error) {
            console.trace(error);
        }
    }
}