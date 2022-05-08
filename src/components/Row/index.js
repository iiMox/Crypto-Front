import React from "react";
import "./Row.css";

const Row = ({ matriculate, lastName, firstName, diploma, sector, state }) => {
    return (
        <tr>
            <td>{matriculate}</td>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{diploma}</td>
            <td>{sector}</td>
            <td>{state}</td>
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
                    className='delete'
                    onClick={(e) => {
                        e.preventDefault();

                        if (
                            window.confirm("Vous voulez supprimer ce diplôme ?")
                        ) {
                        }
                    }}
                >
                    Supprimer
                </button>
            </td>
        </tr>
    );
};

export default Row;
