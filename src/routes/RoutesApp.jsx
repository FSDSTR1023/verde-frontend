import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/Signin";
import { LogIn } from "../pages/Login";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
        </Routes>
    )
}