import React, { useContext } from "react";
import "../leftsidebar/leftsidebar.css";
import { Button, IconButton } from "@mui/material";
import { FaPen } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Options from "./Options";
import { option } from "../../utils/Constants";
import ContextApi from "../../utils/ContextApi";

const Leftsidebar = () => {
    const { setcompose, toggle } = useContext(ContextApi);
    return (
        <div className="sidebar">
            <Button
                startIcon={<FaPen />}
                className={`composebtn`}
                onClick={() => {
                    setcompose(true);
                }}
            >
                {toggle ? "" : "Compose"}
            </Button>
            {option.map((item, index) => {
                return (
                    <Options
                        data={item}
                        key={index}
                    />
                );
            })}
            {toggle ? (
                ""
            ) : (
                <>
                    <div className="label">
                        <h2>Labels</h2>
                        <IconButton>
                            <IoMdAdd />
                        </IconButton>
                    </div>
                </>
            )}
        </div>
    );
};

export default Leftsidebar;
