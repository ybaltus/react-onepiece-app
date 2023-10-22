import {createContext, FunctionComponent, useState} from "react";

type PropsContext = {
    isAuthenticated: boolean,
    login: Function,
    logout: Function
}

const AuthContext = createContext<PropsContext>({
    isAuthenticated: false,
    login: ():void => {},
    logout: ():void => {}
});

const AuthProvider: FunctionComponent<any> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username: string, password: string): Promise<boolean> => {
        try{
            if(username === "onepiece" && password === "onepiece"){
                setIsAuthenticated(true);
            }else {
                setIsAuthenticated(false);
            }

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                 resolve(isAuthenticated);
                }, 1000);
            })
        }catch(error: any){
            console.log(error.message);
            throw new Error("La connexion à échoué'");
        }
    }

    const logout = (): Promise<boolean> => {
        try{
            setIsAuthenticated(false);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(isAuthenticated);
                }, 1000);
            })
        }catch(error: any){
            console.log(error.message);
            throw new Error("La déconnexion à échoué'");
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;