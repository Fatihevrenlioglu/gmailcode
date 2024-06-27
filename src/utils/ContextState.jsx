import React, { useState } from "react";
import ContextApi from "./ContextApi";

const ContextState = (props) => {
    const [compose, setcompose] = useState(false);
    const [toggle, settoggle] = useState(false);
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [messege, setmessege] = useState("");
    const [user, setuser] = useState("");
    const [store, setstore] = useState([]);

    console.log(user);
    console.log(store);

    const togglehndler = () => {
        settoggle(!toggle);
    };

    const emailhandler = (e) => {
        setemail(e.target.value);
    };

    const subjecthandler = (e) => {
        setsubject(e.target.value);
    };

    const messegehandler = (e) => {
        setmessege(e.target.value);
    };

    return (
        <>
            <ContextApi.Provider
                value={{
                    email,
                    compose,
                    setcompose,
                    togglehndler,
                    toggle,
                    settoggle,
                    user,
                    setuser,
                    emailhandler,
                    messegehandler,
                    subjecthandler,
                    subject,
                    messege,
                    setemail,
                    setsubject,
                    setmessege,
                    store,
                    setstore,
                }}
            >
                {props.children}
            </ContextApi.Provider>
        </>
    );
};

export default ContextState;
