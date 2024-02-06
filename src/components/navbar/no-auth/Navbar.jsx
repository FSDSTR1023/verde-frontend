import { NavLink } from "react-router-dom";
import ButtonNavbar from '../../button-navbar/ButtonNavbar';
import { PATHS } from '../../../routes/paths';

const Navbar = () => {
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
                        to={PATHS.index}
                        className={({ isActive }) => isActive ? 'text-shadow Tenor-Sans mr-6' : 'text-[#7C7C7C] Tenor-Sans mr-6'}
                    >
                        INICIO
                    </NavLink>

                    <NavLink
                        to={PATHS.publics.signin}
                        className={({ isActive }) => isActive ? 'text-shadow Tenor-Sans mr-6' : 'text-[#7C7C7C] Tenor-Sans mr-6'}
                    >
                        SIGN IN
                    </NavLink>

                    <NavLink
                        to={PATHS.publics.login}
                        className={({ isActive }) => isActive ? 'text-shadow Tenor-Sans mr-6' : 'text-[#7C7C7C] Tenor-Sans mr-6'}
                    >
                        LOG IN
                    </NavLink>

                </div>

            </div>
        </>
    )
}

export default Navbar