import React from "react";

import "./ReviewRow.css";

const ReviewRow = ({
    matriculate,
    lastName,
    firstName,
    diploma,
    sector,
    university,
}) => {
    return (
        <tr>
            <td>{matriculate}</td>
            <td>{lastName}</td>
            <td>{firstName}</td>
            {university !== undefined ? (
                <>
                    <td>{university}</td>
                    <td>{diploma}</td>
                </>
            ) : (
                <>
                    <td>{diploma}</td>
                    <td>{sector}</td>
                </>
            )}
            <td className='actions'>
                <button
                    className='display'
                    onClick={(e) => {
                        e.preventDefault();

                        window.open("/diploma/1", "_blank");
                    }}
                >
                    Afficher
                </button>
                <button
                    className='accept'
                    onClick={(e) => {
                        e.preventDefault();

                        if (
                            window.confirm("Vous voulez accepter ce diplôme ?")
                        ) {
                        }
                    }}
                >
                    Accepter
                </button>
                <button
                    className='refuse'
                    onClick={(e) => {
                        e.preventDefault();

                        if (
                            window.confirm("Vous voulez refuser ce diplôme ?")
                        ) {
                        }
                    }}
                >
                    Refuser
                </button>
            </td>
        </tr>
    );
};

export default ReviewRow;
