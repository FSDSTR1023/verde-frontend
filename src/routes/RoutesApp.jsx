import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/Signin";
import { LogIn } from "../pages/Login";
import { Layout1 } from "../layouts/Layout1";
import { TableClients } from "../pages/TableClients";
import { GalleryInfo } from "../pages/GalleryInfo";

export const RoutesApp = () => {
    return (
        <>
            <Layout1>
                <Routes>
                    <Route path="/galleryinfo" element={<GalleryInfo />} />
                    <Route path="/table" element={<TableClients />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </Layout1>
        </>
    )
}