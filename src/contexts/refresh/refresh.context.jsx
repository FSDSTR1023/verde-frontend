import { useState, createContext } from 'react';

export const RefreshContext = createContext();

const RefreshProvider = ({ children }) => {

    const [toReload, setToReload] = useState(false);

    const sync = () => {
        setToReload(prev => !prev);
    }

    const valueRefresh = {
        toReload,
        sync
    }

    return (
        <RefreshContext.Provider value={valueRefresh}>
            {children}
        </RefreshContext.Provider>
    )
};

export default RefreshProvider;