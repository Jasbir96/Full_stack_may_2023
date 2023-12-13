import { createContext, useState } from "react";
// calling Auth provider
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ user, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;