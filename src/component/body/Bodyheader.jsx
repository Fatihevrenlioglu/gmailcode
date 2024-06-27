import React from "react";
import "../body/body.css";
import { IconButton } from "@mui/material";
import { FaCaretDown } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Bodyheader = ({ icon, icon2 }) => {
    const navigate = useNavigate();

    const navigatehandle = () => {
        navigate("/");
    };

    return (
        <>
            <div className="body_header">
                <div className="body_header_left">
                    <div className="header_container1">
                        <IconButton onClick={navigatehandle}>{icon}</IconButton>
                        {icon2 && (
                            <IconButton>
                                <FaCaretDown size={18} />
                            </IconButton>
                        )}
                    </div>
                    <div className="header_container2">
                        <IconButton>
                            <TbReload size={21} />
                        </IconButton>
                        <IconButton>
                            <BiDotsVerticalRounded size={21} />
                        </IconButton>
                    </div>
                </div>
                <div className="body_header_right">
                    <div className="right_container">
                        <div className="para">
                            <p>1-50 of 2,104</p>
                        </div>
                        <IconButton>
                            <FaAngleLeft size={19} />
                        </IconButton>
                        <IconButton>
                            <FaAngleRight size={19} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bodyheader;
