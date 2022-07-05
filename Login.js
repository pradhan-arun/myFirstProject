import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registration from './Registration'
const Login = () => {
    const[data,storedata] = useState({
        email:"",password:""
    });

    const check=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        storedata({...data,[name]:value});  
     }
    const checkdata = () =>{
        for(let i =0;i<localStorage.length;i++){
            let name=localStorage['key'](i);
            let d = JSON.parse(localStorage.getItem(name));
            if(d.email === data.email){
                if(d.password === data.password){
                    alert("password is matched");
                    return true;
                }
                alert("password is not matched");
                return false;
            }
        }
    }


    return (<>
        <header>Login Page</header>
        <main>
            <div className="container">
                <form action="/" onSubmit={checkdata}>
                    <div className="col-12">
                        <div className="col-4"><label>Email</label></div>
                        <div className="col-6"><input type="email" name="email" onChange={check}  value={storedata.email} required></input></div>
                    </div>
                    <div className="col-12">
                        <div className="col-4"><label>Password </label></div>
                        <div className="col-6"><input type="password" name="password" onChange={check} value={storedata.password} required></input></div>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success">LogIn</button>
                    </div>
                </form>

            </div>
        </main>
    </>);
}

export default Login;