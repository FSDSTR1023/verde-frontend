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

    deletePhotos = async (id, data) => {


        try {
            const gallery = customFetch({
                path: `/gallery/delete/${id}`,
                method: 'PUT',
                token: this.token,
                data: data
            })

            return gallery;

        } catch (error) {
            console.trace(error);
        }

    }

    deleteGallery = async (data) => {


        try {
            const gallery = customFetch({
                path: `/gallery/delete`,
                method: 'DELETE',
                token: this.token,
                data: data
            })

            return gallery;

        } catch (error) {
            console.trace(error);
        }

    }

    addPhoto = async (id, data) => {


        try {
            const gallery = customFetch({
                path: `/gallery/add/${id}`,
                method: 'PUT',
                token: this.token,
                data: data
            })

            return gallery;

        } catch (error) {
            console.trace(error);
        }

    }

    editGallery = async (id, data) => {


        try {
            const gallery = customFetch({
                path: `/gallery/edit/${id}`,
                method: 'PUT',
                token: this.token,
                data: data
            })

            return gallery;

        } catch (error) {
            console.trace(error);
        }

    }

}