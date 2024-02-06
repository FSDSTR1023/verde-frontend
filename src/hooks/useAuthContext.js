import { useContext } from 'react'
import { AuthContext } from '../contexts/auth/auth.context'

const useAuthContext = () => {

    const valueContext = useContext(AuthContext);

    return valueContext;
}

export default useAuthContext