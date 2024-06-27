import React, { useContext } from "react";
import "../compose/compose.css";
import ContextApi from "../../utils/ContextApi";

const Composeinput = () => {
    const {
        emailhandler,
        email,
        subjecthandler,
        subject,
        messegehandler,
        messege,
    } = useContext(ContextApi);

    return (
        <>
            <div className="compose_input">
                <form>
                    <div className="body_input">
                        <input
                            type="email"
                            placeholder="To"
                            autoFocus
                            onChange={emailhandler}
                            value={email}
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            onChange={subjecthandler}
                            value={subject}
                        />
                        <textarea
                            rows="25"
                            onChange={messegehandler}
                            value={messege}
                        ></textarea>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Composeinput;
