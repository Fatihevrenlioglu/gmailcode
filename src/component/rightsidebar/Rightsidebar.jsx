import React from "react";
import "../rightsidebar/rightsidebar.css";
import { IconButton } from "@mui/material";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const Rightsidebar = () => {
    return (
        <>
            <div className="rightsidebar">
                <div className="top">
                    <IconButton>
                        <FaRegCalendarCheck color="#0459CD" />
                    </IconButton>
                    <IconButton>
                        <FaLightbulb color="#FBBC05" />
                    </IconButton>
                    <IconButton>
                        <IoMdCheckmarkCircleOutline color="#0459CD" />
                    </IconButton>
                    <IconButton>
                        <FaUser color="#0459CD" />
                    </IconButton>
                    <div className="top_border">
                        <IconButton>
                            <IoMdAdd color="black" />
                        </IconButton>
                    </div>
                </div>
                <div className="down">
                    <IconButton style={{ width: "50px", height: "50px" }}>
                        <FaAngleRight size={18} />
                    </IconButton>
                </div>
            </div>
            ;
        </>
    );
};

export default Rightsidebar;
