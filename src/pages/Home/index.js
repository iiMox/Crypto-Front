import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <button
                onClick={(e) => {
                    window.location.pathname = "/student";
                }}
            >
                Etudiant
            </button>
            <button
                onClick={(e) => {
                    window.location.pathname = "/login";
                }}
            >
                Departement
            </button>
            <button
                onClick={(e) => {
                    window.location.pathname = "/login";
                }}
            >
                Université
            </button>
            <button
                onClick={(e) => {
                    window.location.pathname = "/ministry";
                }}
            >
                Ministère
            </button>
            <button
                onClick={(e) => {
                    window.location.pathname = "/check";
                }}
            >
                Verifier Diplôme
            </button>
        </div>
    );
};

export default Home;
