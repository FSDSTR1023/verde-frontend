import { Checkbox, Table } from 'flowbite-react';
import Row from './row/Row';
import { Fab } from '../fab/Fab';
import AddClient from '../add-client-form/AddClient';
import { useEffect } from 'react';
import { customFetch } from '../../helper/customFetch';
import { Client } from '../../api/client';
import { useState } from 'react';

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

    useEffect(() => {
        const client = new Client();
        (async () => {
            const clients = await client.getAll();
            setClient(clients.photographerResponse.clients);
        })()

    }, [])


    return (
        <div className='flex justify-center gap-2 py-12 rounded-b'>
            <div className="w-4/5 max-w rounded-b relative overflow-visible">
                <div className='text-2xl bg-white w-full text-center Tenor-Sans py-16 rounded-t'>MIS CLIENTES</div>
                <Table
                    hoverable
                    theme={customTheme}
                    className='bg-violet-300'
                >
                    <Table.Head>
                        <Table.HeadCell className="p-4">
                            <Checkbox />
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
