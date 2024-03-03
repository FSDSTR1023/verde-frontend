import React from 'react'
import { Client } from '../../api/client';
import { useEffect } from 'react';
import { useState } from 'react';
import CardGallery2 from '../table/card/CardGallery2';
import { Gallery } from '../../api/gallery';
import { Fab } from '../fab/Fab';
import EditClient from '../edit-client/EditClient';
import useRefreshContext from '../../hooks/useRefreshContext';

const ClientFile = ({ id }) => {

    const [client, setClient] = useState([]);
    const [galleries, setGalleries] = useState([]);

    const { toReload } = useRefreshContext();

    useEffect(() => {
        const clientInstance = new Client();
        const galleryInstance = new Gallery();
        (async () => {
            const clientResponse = await clientInstance.getById(id);
            setClient(prev => clientResponse.clientResponse);

            const galleriesOfClient = await galleryInstance.getByIdClient(id);
            setGalleries(prev => galleriesOfClient.galleries);

        })()

    }, [toReload])


    return (
        <div className="flex justify-center w-full max-w rounded-b relative overflow-visible">

            <div className='w-full flex flex-col justify-center items-center' >
                <div className='flex flex-col w-4/5' >
                    <div className='flex flex-col gap-10 md:flex-row md:gap-0 justify-between'>
                        <div className='flex flex-col' >
                            <span className='flex gap-2 items-center' >

                                <p className='text-xl text-left Tenor-Sans py-5'>
                                    DATOS PERSONALES
                                </p>
                                <Fab
                                    icon={<svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M12.0949 0.905062C11.2214 0.0316117 9.80531 0.0316492 8.93194 0.905155L1.46314 8.37481C1.20919 8.62881 1.03069 8.94825 0.947499 9.29762L0.262756 12.1736C0.225056 12.3319 0.272199 12.4985 0.387299 12.6136C0.502406 12.7287 0.66898 12.7758 0.82733 12.7381L3.70311 12.0534C4.05261 11.9702 4.37216 11.7916 4.62619 11.5376L12.095 4.06788C12.9683 3.19445 12.9683 1.77844 12.0949 0.905062ZM9.59488 1.56802C10.1021 1.06068 10.9247 1.06066 11.432 1.56797C11.9392 2.07525 11.9393 2.8977 11.4321 3.40501L10.875 3.96216L9.03788 2.12507L9.59488 1.56802ZM8.375 2.78802L10.2121 4.62511L3.96324 10.8747C3.8319 11.0061 3.66667 11.0984 3.48597 11.1414L1.35119 11.6497L1.85951 9.51481C1.90251 9.33412 1.9948 9.169 2.12609 9.03769L8.375 2.78802Z" fill="black" fillOpacity="0.57" />
                                    </svg>}
                                    toShow={<EditClient client={client} />}
                                />
                            </span>

                            <p className='mt-2 font-light Be-Vietnam-Pro text-[#000000b8]' >
                                {client?.name}
                            </p>

                            <p className='mt-2 font-light Be-Vietnam-Pro text-[#000000b8]' >
                                {client?.email}
                            </p>

                            <p className='mt-2 font-light Be-Vietnam-Pro text-[#000000b8]' >
                                {client?.phone}
                            </p>

                        </div>
                        <div>
                            <span className='flex gap-2 items-center'>
                                <p className='text-xl text-left Tenor-Sans py-5' >
                                    DATOS DE FACTURACIÓN
                                </p>
                                <Fab
                                    icon={<svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M12.0949 0.905062C11.2214 0.0316117 9.80531 0.0316492 8.93194 0.905155L1.46314 8.37481C1.20919 8.62881 1.03069 8.94825 0.947499 9.29762L0.262756 12.1736C0.225056 12.3319 0.272199 12.4985 0.387299 12.6136C0.502406 12.7287 0.66898 12.7758 0.82733 12.7381L3.70311 12.0534C4.05261 11.9702 4.37216 11.7916 4.62619 11.5376L12.095 4.06788C12.9683 3.19445 12.9683 1.77844 12.0949 0.905062ZM9.59488 1.56802C10.1021 1.06068 10.9247 1.06066 11.432 1.56797C11.9392 2.07525 11.9393 2.8977 11.4321 3.40501L10.875 3.96216L9.03788 2.12507L9.59488 1.56802ZM8.375 2.78802L10.2121 4.62511L3.96324 10.8747C3.8319 11.0061 3.66667 11.0984 3.48597 11.1414L1.35119 11.6497L1.85951 9.51481C1.90251 9.33412 1.9948 9.169 2.12609 9.03769L8.375 2.78802Z" fill="black" fillOpacity="0.57" />
                                    </svg>}
                                    toShow={<EditClient client={client} />}
                                />
                            </span>

                            <p className='mt-2 font-light Be-Vietnam-Pro text-[#000000b8]' >
                                {client?.address}
                            </p>

                        </div>
                    </div>

                    <p className='text-xl Tenor-Sans text-center mt-16 mb-12' variant="h6" textalign='center' fontFamily='Tenor Sans' color='#7C7C7C' mt={5} >
                        GALERÍAS
                    </p>

                    <div className='flex flex-nowrap overflow-auto w-full gap-1 px-5 py-1 overflow-x-scroll'>

                        {
                            galleries?.length > 0
                                ? galleries?.map(gal => <CardGallery2 key={gal.id} gal={gal} />)
                                : <p className="text-[#C1C1C1] Be-Vietnam-Pro w-full text-lg text-center mb-10">
                                    Este cliente aún no tiene galerías...
                                </p>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientFile