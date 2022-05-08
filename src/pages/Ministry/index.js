import React from "react";

import ReviewRow from "../../components/ReviewRow";
import HomeBtn from "../../components/HomeBtn";
import AddUniversity from "../../components/AddUniversity";

import "./Ministry.css";

const Ministry = () => {
    return (
        <div className='ministry'>
            <HomeBtn />
            <AddUniversity />
            <h1>Liste Des Diplômes</h1>
            <table>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Université</td>
                        <td>Diplôme</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <ReviewRow
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        university='USTHB'
                        diploma='LICENCE'
                    />
                    <ReviewRow
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        university='USTHB'
                        diploma='LICENCE'
                    />
                    <ReviewRow
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        university='USTHB'
                        diploma='LICENCE'
                    />
                </tbody>
            </table>
            <button
                onClick={(e) => {
                    e.preventDefault();

                    document.querySelector(".add-university").style.display =
                        "flex";
                }}
            >
                Ajouter Université
            </button>
        </div>
    );
};

export default Ministry;
