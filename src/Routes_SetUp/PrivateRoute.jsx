import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(ContextApi)

    const location = useLocation()
    console.log(location.pathname);

    if(loading){
        return <div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(!user){
       return  <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    
    return children
};

export default PrivateRoute;