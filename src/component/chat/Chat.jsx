import React, { forwardRef, useContext } from "react";
import "../chat/chat.css";
import { IconButton } from "@mui/material";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ContextApi from "../../utils/ContextApi";

const Chat = forwardRef(
    ({ email, subject, messege, time, name, photoURL, from }, ref) => {
        const navigate = useNavigate();
        const { setstore } = useContext(ContextApi);

        const pagehandler = () => {
            setstore({
                email,
                subject,
                messege,
                time,
                name,
                photoURL,
                from,
            });
            navigate("/mail");
        };

        return (
            <>
                <div
                    className="chat"
                    ref={ref}
                    onClick={pagehandler}
                >
                    <div className="name">
                        <IconButton>
                            <MdCheckBoxOutlineBlank
                                size={21}
                                color="#bfc2c6"
                            />
                        </IconButton>
                        <IconButton>
                            <IoMdStarOutline
                                size={23}
                                color="#bfc2c6"
                            />
                        </IconButton>
                        <p>{name}</p>
                    </div>
                    <div className="messege">
                        <p>
                            <b>{subject}</b>&nbsp;-&nbsp;<span>{messege}</span>
                        </p>
                    </div>
                    <div className="time">
                        <p>{time}</p>
                    </div>
                </div>
            </>
        );
    }
);

export default Chat;
