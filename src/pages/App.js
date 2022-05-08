import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Web3 from "web3";

import Home from "./Home";
import Student from "./Student";
import Department from "./Department";
import University from "./University";
import Ministry from "./Ministry";
import Check from "./Check";
import Diploma from "./Diploma";
import Login from "./Login";

import "./App.css";

const App = () => {
    useEffect(() => {
        loadBlockchainData();
    });

    const loadBlockchainData = async () => {
        const web3 = new Web3(
            new Web3.providers.HttpProvider("http://127.0.0.1:8545")
        );
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/student' element={<Student />} />
                    <Route path='/department' element={<Department />} />
                    <Route path='/university' element={<University />} />
                    <Route path='/ministry' element={<Ministry />} />
                    <Route path='/check' element={<Check />} />
                    <Route path='/diploma/:matriculate' element={<Diploma />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
