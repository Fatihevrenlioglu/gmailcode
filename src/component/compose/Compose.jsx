import React from "react";
import "../compose/compose.css";
import Composeheader from "./Composeheader";
import Composeinput from "./Composeinput";
import Composefooter from "./Composefooter";

const Compose = () => {
    return (
        <>
            <div className="compose">
                <Composeheader />
                <Composeinput />
                <Composefooter />
            </div>
        </>
    );
};

export default Compose;
