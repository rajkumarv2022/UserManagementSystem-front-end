import React, { useEffect, useState } from 'react'

import Header from './component/Header'
import AddUser from './component/AddUser';

export default function App() {

  const [user,setUser]=useState([]);

  const addContactHandler = (contact) => {
    
    setUser((prevUsers)=>[...prevUsers,contact]);
    console.log("New Contact Added:", user);
   
  };

  useEffect(()=> {
    console.log(user);
  } , [user] )

  return (
    <div>
      <Header />
      <AddUser addContactHandler = {addContactHandler} />
    </div>
  )
}
