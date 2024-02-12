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

    getAll = async () => {


        try {

            const galleries = customFetch({
                path: '/gallery/getAll',
                token: this.token,
            })

            return galleries;

        } catch (error) {
            console.trace(error);
        }

    }

    getById = async (id) => {


        try {
            const gallery = customFetch({
                path: `/gallery/get/${id}`,
                token: this.token,
            })

            return gallery;

        } catch (error) {
            console.trace(error);
        }

    }

    static getByIdClient = async (id) => {


        try {
            const gallery = customFetch({
                path: `/gallery/get/client/${id}`,
            })

            return gallery;

        } catch (error) {
            console.trace(error);
        }

    }

}