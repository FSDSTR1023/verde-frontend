import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/Signin";
import { LogIn } from "../pages/Login";
import { NavBar } from "../components/NavBar";
import { Layout1 } from "../layouts/Layout1";

export const RoutesApp = () => {
    return (
        <Layout1>

            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </Layout1>

    )
}