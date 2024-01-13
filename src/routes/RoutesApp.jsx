import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/Signin";
import { LogIn } from "../pages/Login";
import { Layout1 } from "../layouts/Layout1";
import { TableClients } from "../pages/TableClients";
import { GalleryInfo } from "../pages/GalleryInfo";
import { Navigate } from 'react-router-dom';
import { ClientGallery } from '../pages/ClientGallery';

export const RoutesApp = () => {
    return (
        <>
            <Layout1>
                <Routes>
                    <Route path='/' element={<Navigate to='/table' />} />

                    {/* <Route path="/galleryclients" element={<ClientGallery />} /> */}
                    <Route path="/galleryinfo" element={<GalleryInfo />} />
                    <Route path="/table" element={<TableClients />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </Layout1>
        </>
    )
}