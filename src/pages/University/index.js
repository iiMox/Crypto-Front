import React from "react";

import ReviewRow from "../../components/ReviewRow";
import HomeBtn from "../../components/HomeBtn";
import AddDepartment from "../../components/AddDepartment";

import "./University.css";

const University = () => {
    return (
        <div className='university'>
            <HomeBtn />
            <AddDepartment />
            <h1>Liste Des Diplômes</h1>
            <table>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Diplôme</td>
                        <td>Filière</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <ReviewRow
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        diploma='LICENCE'
                        sector='INFORMATIQUE'
                    />
                    <ReviewRow
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        diploma='LICENCE'
                        sector='INFORMATIQUE'
                    />
                    <ReviewRow
                        matriculate='181832021079'
                        lastName='YAICI'
                        firstName='Abdelhafid Nassim'
                        diploma='LICENCE'
                        sector='INFORMATIQUE'
                    />
                </tbody>
            </table>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(".add-department").style.display =
                        "flex";
                }}
            >
                Ajouter Département
            </button>
        </div>
    );
};

export default University;
