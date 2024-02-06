import { NavLink } from "react-router-dom";
import { PATHS } from '../../../routes/paths';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth/auth.context';


const NavbarAuth = () => {

    const { logout } = useContext(AuthContext);

    return (
        <>
            <div className='bg-white w-full flex flex-row justify-between shadow'>
                <div className='mx-8 my-1'>
                    <NavLink to={PATHS.index}>
                        <img src="/logo.svg" alt="Logo de Piclery" loading="lazy" />
                    </NavLink>
                </div>

                <div className='flex flex-row justify-between items-center' >

                    <NavLink
                        to={PATHS.privates.galleries}
                        className={({ isActive }) => isActive ? 'text-shadow Tenor-Sans mr-6' : 'text-[#7C7C7C] Tenor-Sans mr-6'}
                    >
                        GALERÍAS
                    </NavLink>

                    <NavLink
                        to={PATHS.privates.table}
                        className={({ isActive }) => isActive ? 'text-shadow Tenor-Sans mr-6' : 'text-[#7C7C7C] Tenor-Sans mr-6'}
                    >
                        CLIENTES
                    </NavLink>

                    <a
                        onClick={logout}
                        className='text-[#7C7C7C] Tenor-Sans mr-6 hover:cursor-pointer'
                    >
                        LOG OUT
                    </a>

                </div>

            </div >
        </>
    )
}

export default NavbarAuth