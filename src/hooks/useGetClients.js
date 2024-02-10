import { useEffect } from "react";
import { useState } from "react";
import { customFetch } from "../helper/customFetch";

export const useGetClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');

        (async () => {

            try {

                const clientsResponse = await customFetch({
                    path: '/client/getAll',
                    token
                })
                setClients(prev => clientsResponse.photographerResponse.clients);

            } catch (error) {

                console.trace(error.message);

            }
        })()

    }, [])

    return {
        clients
    }

}