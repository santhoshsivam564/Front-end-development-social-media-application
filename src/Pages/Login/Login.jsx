import { Link } from "react-router-dom";
import "./login.css";
import { useState } from 'react';
import axios from "axios";


import { useNavigate } from "react-router-dom";


function Login() {
  const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate = useNavigate();

const Submit= async (e)=>{
  e.preventDefault();
  if(!email || !password  ){
    alert("Please fill tha all details");
  }else{
  
  try {
   const {data} = await axios.post("http://localhost:4000/user/login",{
      email,password
    });
    alert(data.msg);
    navigate("/");


  } catch (error) {
    console.log(error);
  }}
}
  return (
    <div className="login">
        <div className="card">
        <div className="left">
         <h2>Social Fi</h2>
         <p>Welcome to Social Fi, share your thoughts and
            connect your family & friends.
        </p>
        <span>Don't you have an accunt?</span>
        <Link to="/signup">
        <button className="btn btn-primary">Register</button>
        </Link>
        
        </div>
       
        <form className="right">
            <input type="email" placeholder="Email" value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password"  value={password}
            onChange={(e)=>setPassword(e.target.value)}  />
            <button type="submit" className="btn" onClick={Submit}>Login</button>

        </form>

        </div>
        
    </div>
  )
}

export default Login