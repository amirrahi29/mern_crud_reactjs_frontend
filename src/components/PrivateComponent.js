import React from "react";
import {Navigate,Outlet} from 'react-router-dom';

const PrivateComponent=()=>{
    //get session data or local storage data
    const auth = localStorage.getItem('user');

    return auth?<Outlet />:<Navigate to="/register" />
}

export default PrivateComponent
