import React, { useContext } from "react";
import "../header/header.css";
import { Avatar, IconButton } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import TocIcon from "@mui/icons-material/Toc";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ContextApi from "../../utils/ContextApi";

const Header = () => {
    const { togglehndler, toggle, user } = useContext(ContextApi);

    return (
        <div className="header">
            <div className="header_left">
                {toggle ? (
                    <>
                        <IconButton onClick={togglehndler}>
                            <ReorderIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <IconButton onClick={togglehndler}>
                            <ReorderIcon />
                        </IconButton>
                    </>
                )}

                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" />
            </div>
            <div className="header_middle">
                <div className="search_mail">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input
                        type="text"
                        placeholder="Search mail"
                    />
                    <IconButton>
                        <TocIcon />
                    </IconButton>
                </div>
            </div>
            <div className="header_right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AppsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={user.photoURL} />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
