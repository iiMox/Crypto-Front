import React from "react";
import "./Add.css";

const Add = () => {
    return (
        <div className='add'>
            <div className='container'>
                <h2>Ajouter Un Diplôme</h2>
                <form>
                    <label>Matricule</label>
                    <input type='text' maxLength='12' />
                    <div className='wrapper'>
                        <div className='box'>
                            <label>Nom</label>
                            <input type='text' />
                        </div>
                        <div className='box'>
                            <label>Prénom</label>
                            <input type='text' />
                        </div>
                    </div>
                    <label>Date de Naissance</label>
                    <input type='date' />
                    <div className='wrapper'>
                        <div className='box'>
                            {" "}
                            <label>Diplôme</label>
                            <select>
                                <option></option>
                                <option>Licence</option>
                                <option>Master</option>
                                <option>Doctorat</option>
                            </select>
                        </div>
                        <div className='box'>
                            <label>Date de Délibération</label>
                            <input type='date' />
                        </div>
                    </div>
                    <label>Domaine</label>
                    <input type='text' />
                    <div className='wrapper'>
                        <div className='box'>
                            <label>Filière</label>
                            <input type='text' />
                        </div>
                        <div className='box'>
                            <label>Spécialité</label>
                            <input type='text' />
                        </div>
                    </div>

                    <div className='buttons'>
                        <button className='save'>Enregistrer</button>
                        <button
                            className='close'
                            onClick={(e) => {
                                e.preventDefault();

                                e.target.parentElement.parentElement.parentElement.parentElement.style.display =
                                    "none";
                            }}
                        >
                            Fermer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;
