import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children,isAuth}) => {
    let location = useLocation();
    console.log(isAuth)
    if(!isAuth) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;