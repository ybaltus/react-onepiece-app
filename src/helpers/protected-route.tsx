import {FunctionComponent, useContext, useEffect} from "react";
import AuthContext from "../contexts/auth-context";
import {useNavigate} from "react-router-dom";

const ProtectedRoute: FunctionComponent<any> = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login');
        }
    }, []);


    return children;
}

export default ProtectedRoute;