import React, { useContext } from "react";
import "../maildetails/mail.css";
import { Avatar, IconButton } from "@mui/material";
import { IoStar } from "react-icons/io5";
import { FaReply } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ContextApi from "../../utils/ContextApi";

const Mailheader2 = () => {
    const { store } = useContext(ContextApi);
    return (
        <>
            <div className="mail_header2">
                <div className="mailheader_left">
                    <Avatar src={store.photoURL} />
                    <span>
                        <p>
                            <b>{store.name}</b>
                            &nbsp;||&nbsp; {store.from}
                        </p>
                    </span>
                </div>
                <div className="mailheader_right">
                    <div className="right_para">
                        <p>{store.time}</p>
                    </div>

                    <div className="right_options">
                        <IconButton>
                            <IoStar size={19} />
                        </IconButton>
                        <IconButton>
                            <FaReply size={19} />
                        </IconButton>
                        <IconButton>
                            <HiOutlineDotsVertical size={19} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mailheader2;
