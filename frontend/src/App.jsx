import {  useEffect, useState } from 'react';
import  CreatingContacts  from './components/CreatingContacts';
import  RenderingContacts  from './components/RenderingContacts';
import './App.css'

function App() {
  const [contact, setContact] = useState([]);
  
    useEffect(()=>{
      fetch("http://localhost:3000/geting")
    .then(async function(res){
      const json = await res.json();
      setContact(json.ans);
    })
    },[])
  
  return (
    <>
    <div className="app-container">
      <h1 className="title">Contact Management</h1>
      <CreatingContacts />
      <RenderingContacts contact = {contact} />
    </div>
      
    </>
  )
}

export default App;
