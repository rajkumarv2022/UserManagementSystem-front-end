import React, { useEffect, useState } from 'react'

import Header from './component/Header'
import AddUser from './component/AddUser';
import ContactList from './component/ContactList';

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
    <div className='flex flex-col items-center justify-center gap-4 w-full h-screen'>
      <Header />
      <AddUser addContactHandler = {addContactHandler} />
      <ContactList  user={user} />
    </div>
  )
}
