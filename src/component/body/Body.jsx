import React, { useEffect, useState } from "react";
import "../body/body.css";
import Bodyheader from "./Bodyheader";
import Bodyheader2 from "./Bodyheader2";
import Chat from "../chat/Chat";
import { db } from "../../utils/Firebase";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import FlipMove from "react-flip-move";

const Body = () => {
    const [email, setemail] = useState([]);

    useEffect(() => {
        db.collection("emails")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setemail(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            });
    }, []);

    return (
        <>
            <div className="body">
                <Bodyheader
                    icon={<MdOutlineCheckBoxOutlineBlank />}
                    icon2={true}
                />
                <div className="body_container">
                    <Bodyheader2 />
                    <FlipMove>
                        {email.map(
                            ({
                                id,
                                data: {
                                    email,
                                    messege,
                                    timestamp,
                                    subject,
                                    name,
                                    from,
                                    photoURL,
                                },
                            }) => {
                                return (
                                    <Chat
                                        key={id}
                                        email={email}
                                        messege={messege}
                                        subject={subject}
                                        time={new Date(
                                            timestamp?.seconds * 1000
                                        ).toLocaleDateString()}
                                        name={name}
                                        from={from}
                                        photoURL={photoURL}
                                    />
                                );
                            }
                        )}
                    </FlipMove>
                </div>
            </div>
        </>
    );
};

export default Body;
