import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, sethAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, sethAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
 export default AuthContext;