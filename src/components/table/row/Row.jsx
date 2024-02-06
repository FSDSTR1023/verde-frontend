import { Checkbox, Table } from 'flowbite-react'
import React from 'react'
import { Fab } from '../../fab/Fab'
import ClientFile from '../../client-file/ClientFile'

const Row = ({ name, email, phone }) => {
    return (
        <Table.Row className="bg-white ">
            <Table.Cell className="py-4">
                <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap ">
                {name}
            </Table.Cell>
            <Table.Cell className='text-[#000000b8]'>{email}</Table.Cell>
            <Table.Cell>{phone}</Table.Cell>
            <Table.Cell>
                <Fab
                    className='flex justify-center mr-5'
                    icon={<svg className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M8.00005 3.21311C9.65687 3.21311 11 4.44882 11 5.97309C11 7.49744 9.65687 8.7331 8.00005 8.7331C6.34317 8.7331 5.00002 7.49744 5.00002 5.97309C5.00002 4.44882 6.34317 3.21311 8.00005 3.21311ZM8.00005 4.2481C6.96452 4.2481 6.12502 5.02041 6.12502 5.97309C6.12502 6.92578 6.96452 7.69809 8.00005 7.69809C9.03557 7.69809 9.87505 6.92578 9.87505 5.97309C9.87505 5.02041 9.03557 4.2481 8.00005 4.2481ZM8.00005 0.794922C11.4602 0.794922 14.4471 2.96843 15.2759 6.01436C15.3513 6.2916 15.1682 6.57264 14.8668 6.64205C14.5654 6.7114 14.26 6.54297 14.1845 6.26566C13.4804 3.67771 10.941 1.82992 8.00005 1.82992C5.05773 1.82992 2.5176 3.6793 1.81467 6.26883C1.7394 6.54607 1.43404 6.71471 1.13264 6.6455C0.831237 6.57622 0.647922 6.29533 0.723192 6.01801C1.55051 2.9703 4.53839 0.794922 8.00005 0.794922Z" fill="#7C7C7C" />
                    </svg>}
                    toShow={<ClientFile />}
                />

            </Table.Cell>
        </Table.Row>
    )
}

export default Row