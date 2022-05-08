import React from "react";
import { useState } from "react";

import HomeBtn from "../../components/HomeBtn";

import "./Student.css";

const Student = () => {
    const [matriculate, setMatriculate] = useState("");

    const onSubmit = () => {
        if (matriculate !== "") {
            window.location.pathname = `/diploma/${matriculate}`;
        }
    };

    return (
        <div className='student'>
            <HomeBtn />
            <form>
                <label>Matricule :</label>
                <input
                    type='text'
                    maxLength='12'
                    placeholder='Matricule'
                    value={matriculate}
                    onKeyPress={(e) => {
                        var theEvent = e || window.event;

                        // Handle paste
                        if (theEvent.type !== "paste") {
                            // Handle key press
                            var key = theEvent.keyCode || theEvent.which;
                            key = String.fromCharCode(key);
                        } else {
                            key = e.clipboardData.getData("text/plain");
                        }
                        var regex = /[0-9]|\./;
                        if (!regex.test(key)) {
                            theEvent.returnValue = false;
                            if (theEvent.preventDefault)
                                theEvent.preventDefault();
                        }
                    }}
                    onChange={(e) => {
                        setMatriculate(e.target.value);
                    }}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();

                        onSubmit();
                    }}
                >
                    Afficher
                </button>
            </form>
        </div>
    );
};

export default Student;
