import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import urlConfig from '../../urlConfig';
import axios from "axios";

function Logout() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
             await axios.get(urlConfig.LOGOUT_URL,
                {
                    withCredentials: true
                });
            setAuth({});
            navigate("/home");
        }

        catch (err) {
            console.log(err.message);
            console.log(err);
        }
    }
    return (
        <div onClick={logoutHandler}>Logout</div>
    )
}

export default Logout