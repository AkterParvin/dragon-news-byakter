/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location)
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-bars w-28 bg-red-700 absolute top-[50%] right-[50%]"></span>
        
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;