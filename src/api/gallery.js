import { customFetch } from "../helper/customFetch.js";

export class Gallery {

    token;

    constructor() {
        this.token = localStorage?.getItem('token');
    }

    create = async (data) => {

        try {
            const response = await customFetch({
                data,
                method: 'POST',
                path: '/gallery/create',
                token: this.token,
            });

            return response;

        } catch (error) {

            console.trace(error);

        }
    }

}