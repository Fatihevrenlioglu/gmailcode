import React, { useContext } from "react";
import Header from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leftsidebar from "./component/leftsidebar/Leftsidebar";
import Body from "./component/body/Body";
import Mail from "./component/maildetails/Mail";
import Rightsidebar from "./component/rightsidebar/Rightsidebar";
import Compose from "./component/compose/Compose";
import ContextApi from "./utils/ContextApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./component/login/Login";

const App = () => {
    const { compose, toggle, user } = useContext(ContextApi);
    return (
        <>
            <div className="app">
                {user ? (
                    <>
                        <BrowserRouter>
                            <Header />
                            <div
                                className={`${
                                    toggle ? "body_app2" : "body_app"
                                }`}
                            >
                                <Leftsidebar />
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<Body />}
                                    />
                                    <Route
                                        path="/mail"
                                        element={<Mail />}
                                    />
                                </Routes>
                                <Rightsidebar />
                                {compose ? <Compose /> : ""}
                            </div>
                        </BrowserRouter>
                        <ToastContainer />
                    </>
                ) : (
                    <Login />
                )}
            </div>
        </>
    );
};

export default App;
