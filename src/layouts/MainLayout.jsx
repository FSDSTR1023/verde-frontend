import { useContext } from 'react'
import NavbarAuth from '../components/navbar/auth/Navbar.auth'
import Navbar from '../components/navbar/no-auth/Navbar'
import { AuthContext } from '../contexts/auth/auth.context'


export const MainLayout = ({ children }) => {

    const { isAuth } = useContext(AuthContext);

    return (
        <div className='h-screen overflow-y-scroll bg-[#F5F5F5]'>
            {
                isAuth
                    ? <NavbarAuth />
                    : <Navbar />
            }
            <div>
                {children}
            </div>
        </div>
    )
}