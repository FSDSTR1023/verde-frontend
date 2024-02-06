import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/no-auth/Navbar";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import ClientGallery from "../pages/ClientGallery";
import { TableOfClients } from "../components/table/TableOfClients";
import CardGallery from "../components/card-gallery/CardGallery";
import Galleries from "../pages/Galleries";
import { Table } from "flowbite-react";
import OpenGallery from "../pages/OpenGallery";
import { PATHS } from './paths';
import PublicRoutes from './nested-routes/PublicRoutes';
import PrivatesRoutes from './nested-routes/PrivatesRoutes';


const AppMainRoute = () => {
  return (
    <>
      <Routes>

        <Route path={PATHS.index} element={<PublicRoutes />}>
          <Route path={PATHS.publics.signin} element={<SignIn />} />
          <Route path={PATHS.publics.login} element={<LogIn />} />
        </Route>

        <Route path={PATHS.privates.index} element={<PrivatesRoutes />}>
          <Route index element={<Galleries />} />
          <Route path={PATHS.privates.galleries} element={<Galleries />} />
          <Route path={PATHS.privates.table} element={<TableOfClients />} />
          <Route path={PATHS.privates.clientGallery} element={<ClientGallery />} />
          <Route path={PATHS.privates.openGallery} element={<OpenGallery />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppMainRoute;
