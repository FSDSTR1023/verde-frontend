import { useEffect } from "react";
import { useState } from "react";
import { customFetch } from "../helper/customFetch";
import useAuthContext from "./useAuthContext";

export const useGetClients = () => {
    const [clients, setClients] = useState([]);
    const { logout } = useAuthContext();

    useEffect(() => {

        const token = localStorage.getItem('token');

        (async () => {

            try {

                const clientsResponse = await customFetch({
                    path: '/client/getAll',
                    token
                })
                console.log(clientsResponse.photographerResponse.clients);
                setClients(prev => clientsResponse.photographerResponse.clients);

            } catch (error) {

                console.log(error.message);

            }
        })()

    }, [])

    return {
        clients
    }

}