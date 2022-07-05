import React from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    return (<>
    <div className="container" align="center">
    <div><Link className="btn btn-primary" to="/registration">Register</Link></div>
    <div><Link className="btn btn-success" to="/login">goto login</Link></div>
    </div>
    </>);
}

export default Home;