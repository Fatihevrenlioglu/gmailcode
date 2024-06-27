import React, { useContext } from "react";
import "../maildetails/mail.css";
import Bodyheader from "../body/Bodyheader";
import { IoMdArrowBack } from "react-icons/io";
import Mailheader from "./Mailheader";
import Mailheader2 from "./Mailheader2";
import ContextApi from "../../utils/ContextApi";

const Mail = () => {
    const { store } = useContext(ContextApi);
    return (
        <div className="mailbox">
            <Bodyheader icon={<IoMdArrowBack size={21} />} />
            <Mailheader />
            <Mailheader2 />
            <div className="para_container">
                <p>{store.messege}</p>
            </div>
        </div>
    );
};

export default Mail;
