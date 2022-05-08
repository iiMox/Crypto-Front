import React from "react";

import Add from "../../components/Add";
import Row from "../../components/Row";
import HomeBtn from "../../components/HomeBtn";

import "./Department.css";

const Department = () => {
    return (
        <div className='department'>
            <Add />
            <HomeBtn />
            <h1>Tableau des diplômes</h1>
            <table>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Diplôme</td>
                        <td>Filière</td>
                        <td>État</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <Row
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        diploma='LICENCE'
                        sector='INFORMATIQUE'
                        state='En attente'
                    />
                    <Row
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        diploma='LICENCE'
                        sector='INFORMATIQUE'
                        state='Refusé'
                    />
                    <Row
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        diploma='LICENCE'
                        sector='INFORMATIQUE'
                        state='Accepté'
                    />
                </tbody>
            </table>
            <button
                onClick={(e) => {
                    e.preventDefault();

                    document.querySelector(".add").style.display = "flex";
                }}
            >
                Ajouter
            </button>
        </div>
    );
};

export default Department;
