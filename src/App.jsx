
import "./App.css";
import AuthProvider from './contexts/auth/auth.context';
import { MainLayout } from "./layouts/MainLayout";
import AppMainRoute from "./routes/AppMainRoute";

function App() {

  return (
    // <ClientGallery />
    //<OpenGallery />
    <div>
      <AuthProvider>
        <MainLayout>
          <AppMainRoute />
        </MainLayout>
      </AuthProvider>
    </div>
  );
}

export default App;

