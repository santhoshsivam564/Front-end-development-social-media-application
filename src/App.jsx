import "./App.css";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { handleLogin } from "./slices/user";
import  { useEffect } from 'react'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(handleLogin(token));
    }
  },);

  
  return (
    <div>
      
      <Layout />
    </div>
  )
}

export default App