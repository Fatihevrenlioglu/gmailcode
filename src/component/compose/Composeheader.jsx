import React, { useContext } from "react";
import "../compose/compose.css";
import { IconButton } from "@mui/material";
import { MdOutlineMinimize } from "react-icons/md";
import { MdOutlineOpenInFull } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import ContextApi from "../../utils/ContextApi";

const Composeheader = () => {
    const { setcompose } = useContext(ContextApi);
    return (
        <>
            <div className="composeheader">
                <div className="composeheader_left">
                    <p>New Message</p>
                </div>
                <div className="composeheader_right">
                    <div className="icon">
                        <MdOutlineMinimize size={19} />
                    </div>
                    <div className="icon">
                        <MdOutlineOpenInFull size={19} />
                    </div>
                    <div className="icon">
                        <IoClose
                            size={19}
                            onClick={() => {
                                setcompose(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Composeheader;
