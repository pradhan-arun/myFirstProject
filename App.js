import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import Home from './Home'


const App = () => {
    // const increment = () => {
    //     setcount(count + 1);
    //     localStorage.setItem('name','Arun Pradhan');
    // }
    // const decrement = () => {
    //     setcount( count - 1 );
    //     console.log(localStorage.getItem('name'));
    // }
    // return (
    //     <>
    //     <h1> {count} </h1>
    //     <button onClick={increment}>increment</button>
    //     <button onClick={decrement}>decrement</button>
    //     </>
    // );
    return (
        <>

        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
        </Routes>
        </>
    );
};

export default App;