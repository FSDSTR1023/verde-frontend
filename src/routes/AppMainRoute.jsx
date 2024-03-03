import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import { TableOfClients } from "../components/table/TableOfClients";
import Galleries from "../pages/Galleries";
import OpenGallery from "../pages/OpenGallery";
import { PATHS } from './paths';
import PublicRoutes from './nested-routes/PublicRoutes';
import PrivatesRoutes from './nested-routes/PrivatesRoutes';
import Home from "../pages/Home";


const AppMainRoute = () => {

  return (
    <>
      <Routes>

        <Route index element={<Home />} />


        <Route path={PATHS.index} element={<PublicRoutes />}>
          <Route path={PATHS.publics.signin} element={<SignIn />} />
          <Route path={PATHS.publics.login} element={<LogIn />} />
        </Route>

        <Route path={PATHS.privates.index} element={<PrivatesRoutes />}>
          <Route index element={<Galleries />} />
          <Route path={PATHS.privates.galleries} element={<Galleries />} />
          <Route path={`${PATHS.privates.galleries}/:id`} element={<OpenGallery />} />
          <Route path={PATHS.privates.table} element={<TableOfClients />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppMainRoute;
