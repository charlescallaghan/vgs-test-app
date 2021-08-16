import React, { useState } from 'react';

export const Context = React.createContext();

const Store = ({ children }) => {
    const [tokenisedData, setTokenisedData] = useState({});

    return (
        <Context.Provider value={[tokenisedData, setTokenisedData]}>{children}</Context.Provider>
    )

}

export default Store;