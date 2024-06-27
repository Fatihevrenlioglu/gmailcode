import React, { useContext } from "react";
import "../compose/compose.css";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaAngleDown } from "react-icons/fa";
import ContextApi from "../../utils/ContextApi";
import { toast } from "react-toastify";
import { db } from "../../utils/Firebase";
import { Timestamp } from "firebase/firestore";

const Composefooter = () => {
    const {
        email,
        setemail,
        setsubject,
        subject,
        setmessege,
        messege,
        setcompose,
        user,
    } = useContext(ContextApi);

    const formSubmit = (e) => {
        e.preventDefault();
        if (email === "" || subject === "" || messege === "") {
            return toast.error("All field are required");
        } else {
            db.collection("emails").add({
                email: email,
                subject: subject,
                messege: messege,
                timestamp: Timestamp.now(),
                name: user.displayName,
                from: user.email,
                photoURL: user.photoURL,
            });
            setemail("");
            setmessege("");
            setsubject("");
            toast.success("Email Send Successfully");
            setcompose(false);
        }
    };

    return (
        <>
            <div className="compose_footer">
                <div className="footer_left">
                    <button onClick={formSubmit}>
                        Send <FaAngleDown />
                    </button>
                    <FormatColorTextIcon />
                    <LinkIcon />
                    <InsertEmoticonIcon />
                    <NoteAddIcon />
                    <PhotoIcon />
                    <PhonelinkLockIcon />
                    <CreateIcon />
                    <MoreVertIcon />
                </div>
                <div className="footer_right">
                    <DeleteIcon />
                </div>
            </div>
        </>
    );
};

export default Composefooter;
