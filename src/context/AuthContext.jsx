import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider ({ children }) {
    const [isAuth, setisAuth] = React.useState(false);
    const [tokenNumber, setTokenNumber] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const Api = async () => {
        try {
            setLoading(true);
            let user = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
            let response = await fetch(`https://reqres.in/api/login`,{
                method: 'POST',
                body: JSON.stringify(user),
                headers : { "Content-Type" : "application/json" }
            });
            let result = await response.json();
            setisAuth(true);
            setTokenNumber(result.token);
            //console.log(result.token)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const toggle = () => {
        setisAuth(!isAuth);
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{isAuth, loading, tokenNumber, Api, toggle}} >
            {children}
        </AuthContext.Provider>
    )
}