import React, { useContext } from "react";
import "../login/login.css";
import { Button } from "@mui/material";
import ContextApi from "../../utils/ContextApi";
import { auth, provider } from "../../utils/Firebase";

const Login = () => {
    const { setuser } = useContext(ContextApi);

    const login = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            setuser(user);
        });
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" />
                <Button onClick={login}>Login With Google</Button>
            </div>
        </div>
    );
};

export default Login;
