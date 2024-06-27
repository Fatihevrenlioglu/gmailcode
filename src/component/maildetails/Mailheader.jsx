import React, { useContext } from "react";
import "../maildetails/mail.css";
import { IconButton } from "@mui/material";
import { IoMdPrint } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import ContextApi from "../../utils/ContextApi";
import { BiSolidTagAlt } from "react-icons/bi";

const Mailheader = () => {
    const { store } = useContext(ContextApi);
    return (
        <>
            <div className="mailheader">
                <div className="mail_para">
                    <p>
                        {store.subject}&nbsp;&nbsp;
                        <BiSolidTagAlt size={21} />
                    </p>
                </div>
                <div className="mail_options">
                    <IconButton>
                        <IoMdPrint size={21} />
                    </IconButton>
                    <IconButton>
                        <RxExit size={21} />
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default Mailheader;
