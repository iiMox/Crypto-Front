import React from "react";
import HomeBtn from "../../components/HomeBtn";

import "./Check.css";

const Check = () => {
    return (
        <div className='check'>
            <HomeBtn />
            <h1>Vérifier Un Diplôme</h1>
            <form>
                <label>Nom Étudiant</label>
                <input type='text' />
                <label>Prénom Étudiant</label>
                <input type='text' />
                <label>Date Diplôme</label>
                <input type='date' />
                <button
                    onClick={(e) => {
                        e.preventDefault();

                        window.open("/diploma/1", "_blank");
                    }}
                >
                    Vérifier
                </button>
            </form>
        </div>
    );
};

export default Check;
