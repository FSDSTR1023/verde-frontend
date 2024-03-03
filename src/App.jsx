
import { Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from './contexts/auth/auth.context';
import { MainLayout } from "./layouts/MainLayout";
import AppMainRoute from "./routes/AppMainRoute";
import { Route } from "react-router-dom";
import { PATHS } from "./routes/paths";
import ClientGallery from "./pages/ClientGallery";
import RefreshProvider from './contexts/refresh/refresh.context';

function App() {

  return (
    <div>
      <AuthProvider>
        <RefreshProvider>
          <Routes>
            <Route path={PATHS.client} element={<ClientGallery />} />
          </Routes>
          <MainLayout>
            <AppMainRoute />
          </MainLayout>
        </RefreshProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

