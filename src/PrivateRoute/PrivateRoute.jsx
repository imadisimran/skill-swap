import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {loading}=use(AuthContext)
    const location=useLocation()
    // console.log(location)

    const {user}=use(AuthContext)

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;