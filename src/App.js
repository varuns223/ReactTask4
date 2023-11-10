import logo from './logo.svg';
import './App.css';
import Table from './component/Table';
import { useEffect, useState } from 'react';

function App() {
  const API = "https://dummyjson.com/users"
  const [user , setuser] = useState([]);
  const fetchuser = async (url)=>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.users);
    setuser(data.users)
  }

  useEffect(()=>{
    fetchuser(API);
  } , [])
  return (
    <>
     <div className="container">
     <h2 style={{textAlign:"center"}}>Dummy Data</h2>
     </div>
    <div className="container my-3">
        
        <Table user={user}/>
    </div>
    </>

    
  );
}

export default App;
