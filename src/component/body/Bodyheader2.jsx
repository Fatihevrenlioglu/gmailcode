import React from "react";
import "../body/body.css";
import { MdInsertPhoto } from "react-icons/md";
import { FiTag } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";

const Bodyheader2 = () => {
    return (
        <>
            <div className="bodyheader2">
                <div className="header2_primary">
                    <MdInsertPhoto
                        size={21}
                        color="#0B57D0"
                        style={{ marginLeft: "12px" }}
                    />
                    <h4>Primary</h4>
                </div>
                <div className="header2_promotion">
                    <FiTag
                        size={21}
                        color="#5E6060"
                        style={{ marginLeft: "12px" }}
                    />
                    <h4>Promotions</h4>
                </div>
                <div className="header2_social">
                    <LuUsers
                        size={21}
                        color="#5E6060"
                        style={{ marginLeft: "12px" }}
                    />
                    <h4>Social</h4>
                </div>
            </div>
        </>
    );
};

export default Bodyheader2;
