import { useContext } from 'react';
import { RefreshContext } from '../contexts/refresh/refresh.context'

const useRefreshContext = () => {

    const valueContext = useContext(RefreshContext);

    return valueContext;
}

export default useRefreshContext