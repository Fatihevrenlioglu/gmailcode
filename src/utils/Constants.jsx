import { RiInbox2Fill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { RiDraftLine } from "react-icons/ri";
import { MdLabelImportant } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const option = [
    {
        name: "Inbox",
        icon: <RiInbox2Fill size={20} />,
        messege: "7,002",
        active: true,
    },
    { name: "Starred", icon: <FaRegStar size={20} /> },
    { name: "Snoozed", icon: <MdOutlineWatchLater size={20} /> },
    { name: "Send", icon: <AiOutlineSend size={20} /> },
    { name: "Drafts", icon: <RiDraftLine size={20} /> },
    { name: "Important", icon: <MdLabelImportant size={20} /> },
    { name: "More", icon: <IoIosArrowDown size={20} /> },
];
