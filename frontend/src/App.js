import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  const [username,setusername] = useState("");

  const getNames = async () => {
    const response = await axios.get("/names");
    setusername(response.data)
  }

 useEffect(() => {
  getNames();
 },[])

  return (
    <>
      <h1>My website </h1>
      <h3>My name is {username}</h3>
    </>
  );
}

export default App;
