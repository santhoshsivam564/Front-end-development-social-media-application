import "./signup.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const[username, setUserName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[age,setAge]=useState("");
const[contactno,setContactNo]=useState("");

let navigate  =  useNavigate();


const Submit = async (e)=>{
  e.preventDefault();
  if(!username || !email || !age || !password || !contactno){
   alert("Please enter all details")
   
  }else{
  try {
   const {data} = await axios.post("http://localhost:4000/user/signup",{
      username,email,password,age,contactno
    });
    alert(data.msg);
    navigate("/login");


  } catch (error) {
    console.log(error);
  }}
}



  return (
    <div className="sign">
        <div className="card">
        
        <form className="right">
        <h2>Create Account</h2>
            <input type="text" placeholder="Username" value={username}
            onChange={(e)=>setUserName(e.target.value)}  />
            <input type="email" placeholder="Email" value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            />
            <input type="password" placeholder="Password" value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            />
            <input type="number" placeholder="Age" value={age} 
            onChange={(e)=>setAge(e.target.value)} 
            />
            <input type="number" placeholder="contactNo"  value={contactno}
            onChange={(e)=>setContactNo(e.target.value)} 
            />
           
            
            <button type="submit" className="btn" onClick={Submit}>Signup</button>
            <p>Do you have an account? <a href="/login">Login</a></p>

        </form>

        </div>
        
    </div>
  )
}

export default Signup;