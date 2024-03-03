import { Table } from 'flowbite-react';
import Row from './row/Row';
import { Fab } from '../fab/Fab';
import AddClient from '../add-client-form/AddClient';
import { useEffect } from 'react';
import { Client } from '../../api/client';
import { useState } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useRefreshContext from '../../hooks/useRefreshContext';


const customTheme = {
    "root": {
        "base": "w-full text-center text-sm text-gray-500  rounded-b",
        "shadow": "absolute bg-white w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
        "wrapper": "relative"
    },
    "body": {
        "base": "group/body ",
        "cell": {
            "base": ""
        }
    },
    "head": {
        "base": "group/head text-xs uppercase bg-white",
        "cell": {
            "base": "Be-Vietnam-Pro text-[#7C7C7C] font-medium text-sm"
        }
    },
    "row": {
        "base": "group/row font-light text-black Be-Vietnam-Pro",
        "hovered": "hover:bg-gray-50",
        "striped": "odd:bg-white even:bg-gray-50"
    }
}


export const TableOfClients = () => {

    const [client, setClient] = useState([]);
    const table = useRef();

    const { toReload, sync } = useRefreshContext();

    useEffect(() => {
        const client = new Client();
        (async () => {
            const clients = await client.getAll();
            setClient(clients.photographerResponse.clients);
        })()

    }, [toReload])

    const deleteClient = async () => {

        const client = new Client();

        const data = []

        for (let i = 0; i < table.current.length; i++) {
            if (table.current[i].checked) {
                const element = table.current[i].id;
                data.push(element);
            }
        }

        if (!data.length) {
            toast.warn("Debes seleccionar al menos un cliente para eliminarlo")
            return;
        }

        const promises = [];

        data.forEach(c => promises.push(client.delete(c)));

        await Promise.all(promises);

        toast.success(
            promises.length === 1
                ? "Cliente eliminado"
                : "Clientes eliminados"
        )

        sync();
    }

    return (

        <div className='flex justify-center gap-2 py-12 rounded-b'>
            <div className="w-4/5 max-w rounded-b relative overflow-visible">

                <ToastContainer
                    position="bottom-center"
                    theme="colored"
                />

                <div className='text-2xl bg-white w-full text-center Tenor-Sans py-16 rounded-t'>MIS CLIENTES</div>
                <form ref={table}>
                    <Table
                        hoverable
                        theme={customTheme}
                        className='bg-violet-300'
                    >
                        <Table.Head>
                            <Table.HeadCell className="p-4 flex justify-center ">
                                <svg onClick={deleteClient} className='cursor-pointer hidd' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
                                    <path d="M6 2.46021H9C9 1.68379 8.32845 1.05438 7.5 1.05438C6.67155 1.05438 6 1.68379 6 2.46021ZM4.875 2.46021C4.875 1.10147 6.05025 0 7.5 0C8.94975 0 10.125 1.10147 10.125 2.46021H14.4375C14.7481 2.46021 15 2.69624 15 2.9874C15 3.27856 14.7481 3.51459 14.4375 3.51459H13.4482L12.5692 12.0278C12.4297 13.3789 11.2181 14.4098 9.76973 14.4098H5.23027C3.78191 14.4098 2.57036 13.3789 2.43085 12.0278L1.55181 3.51459H0.5625C0.251842 3.51459 0 3.27856 0 2.9874C0 2.69624 0.251842 2.46021 0.5625 2.46021H4.875ZM6.375 5.79907C6.375 5.50792 6.12315 5.27188 5.8125 5.27188C5.50184 5.27188 5.25 5.50792 5.25 5.79907V11.071C5.25 11.3621 5.50184 11.5981 5.8125 11.5981C6.12315 11.5981 6.375 11.3621 6.375 11.071V5.79907ZM9.1875 5.27188C9.49815 5.27188 9.75 5.50792 9.75 5.79907V11.071C9.75 11.3621 9.49815 11.5981 9.1875 11.5981C8.87685 11.5981 8.625 11.3621 8.625 11.071V5.79907C8.625 5.50792 8.87685 5.27188 9.1875 5.27188ZM3.55062 11.9262C3.63433 12.7369 4.36125 13.3554 5.23027 13.3554H9.76973C10.6388 13.3554 11.3657 12.7369 11.4494 11.9262L12.3179 3.51459H2.68206L3.55062 11.9262Z" fill="#7C7C7C" />
                                </svg>
                            </Table.HeadCell>
                            <Table.HeadCell>NOMBRE</Table.HeadCell>
                            <Table.HeadCell>EMAIL</Table.HeadCell>
                            <Table.HeadCell>TELÉFONO</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            {
                                client.map(c => <Row
                                    key={c._id}
                                    name={c.name}
                                    email={c.email}
                                    phone={c.phone}
                                    id={c._id}
                                />)
                                    .reverse()
                            }

                        </Table.Body>
                    </Table>
                </form>

                <Fab

                    toShow={<AddClient />}

                    className='rounded-full absolute -bottom-6 -right-16 h-11 w-11 flex items-center justify-center shadow shadow-[#00000054] border bg-[#F5F5F5] hover:cursor-pointer'

                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#D9D9D9" className="w-8 h-8">
                            <path d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    }
                />
            </div>

        </div>


    );
}
