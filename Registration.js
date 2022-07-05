import React, { useState }  from "react";
import ReactDOM from 'react-dom/client';
import Home from "./Home";
import Login from "./Login";
const namecheck =/^[A-Za-z]{2,20}\w$/;
const page="";
const Registration = () => {
    const [data , storedata] = useState({
        username:"",
        fullname:"",
        f_name:"",
        m_name:"",
        address:"",
        email:"",
        password:"",
        cpassword:"",
        phone_number:"",
        city:""
    })
    const check = (e) =>{
         let name=e.target.name;
         let value = e.target.value;

         console.log(name +" = "+ value);
         storedata({...data, [name]:value});
 
        }
    const handleSubmit = (e) =>{
        if(data.password === data.cpassword){
            alert("Registered successfully");
            localStorage.setItem(data.email,JSON.stringify(data));
            console.log("successfully stored");
            return true;
        }
        else{
            alert("password did not matched");
            return false;
        }
    }
    return (<>
    <form action='/' onSubmit={handleSubmit} method="post">
    <label>username : <input type="text" name="username" onChange={check} value={storedata.username}  required></input><h1>{check}</h1></label><br />
        <label>Name : <input type="text" name="fullname" value={storedata.fullname} onChange={check} required ></input></label><br/>
        <label>Father Name : <input type="text" name="f_name" value={storedata.f_name} onChange={check} required></input></label><br />
        <label>Mother Name : <input type="text" name="m_name" value={data.m_name} onChange={check} required></input></label><br />
        <label>Address :<textarea row="10" col="10" name="address" value={storedata.address} onChange={check} required ></textarea></label><br />
        <label>Email : <input type="email" name="email" value={storedata.email} onChange={check} required></input></label><br />
        <label>password : <input type="password" name="password" value={storedata.password} onChange={check}  required></input> Confirm password : <input type="text" name="cpassword" value={storedata.cpassword} onChange={check}></input></label><br />
        <label>phone numb<input type="text" name="phone_number" value={storedata.phone_number} onChange={check} required></input></label><br />
        <select name="city" value={storedata.city} onChange={check}>
            <option>Hydrabaad</option>
            <option>Mumbai</option>
        </select>
        <button type="submit">Submit</button>

    </form>
    </>);
}
export default Registration;