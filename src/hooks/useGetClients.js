import { useEffect } from "react";
import { useState } from "react";
import { customFetch } from "../helper/customFetch";

export const useGetClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');

        (async () => {

            const clientsResponse = await customFetch({
                path: '/client/getAll',
                token
            })
            const cr = await clientsResponse.json()

            console.log(cr.photographerResponse.clients);

            setClients(prev => cr.photographerResponse.clients);

        })()

    }, [])

    return {
        clients
    }

}