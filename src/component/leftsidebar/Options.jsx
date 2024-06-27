import React, { useContext } from "react";
import "./leftsidebar.css";
import ContextApi from "../../utils/ContextApi";

const Options = ({ data }) => {
    const { toggle } = useContext(ContextApi);
    return (
        <div className={`options ${data.active && "active"}`}>
            {data.icon}
            {toggle ? (
                ""
            ) : (
                <>
                    <h2>{data.name}</h2>
                </>
            )}
            {toggle ? (
                ""
            ) : (
                <>
                    <p>{data.messege}</p>
                </>
            )}
        </div>
    );
};

export default Options;
