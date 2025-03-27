import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Header from './component/Header'
import AddUser from './component/AddUser';
import ContactList from './component/ContactList';
import SignupPage from './component/SignUpPage';
import LoginPage from './component/LoginPage';

export default function App() {

  const [user,setUser]=useState([]);

  const url='https://springbootproject-4.onrender.com';

  const fetchUsers = async () => {

    try
    {
      const response = await axios.get(`${url}/user/getAll`);
      return response.data;
    }
    catch(e)
    {
      console.log(e);
      throw e;
    }

  }

  const putUsersinDb = async (newUser) => {
    try {
      const response = await axios.post(`${url}/user/create`, newUser, {
        headers: { "Content-Type": "application/json" }
      });
  
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.error("Error adding user:", e.response?.data || e.message);
      throw e;
    }
  };
  

  useEffect(() => {

    const getUsers = async() => {

      try
      {
        const data=await fetchUsers(); 
        setUser(data);
      }
      catch(e)
      {
        console.log(e);
      }

    }
    
    getUsers();

  }, [])

  // const addContactHandler = (contact) => {
    
  //   // setUser((prevUsers)=>[...prevUsers,contact]);
  //   // console.log("New Contact Added:", user);

  //   try
  //   {
  //       const response = putUsersinDb(contact);
  //       console.log(response);
  //   }
  //   catch(e)
  //   {
  //     console.log(e);
  //   }
   
  // };

  const addContactHandler = async (contact) => {
    try {
      const response = await putUsersinDb(contact); 
      console.log(response);
    } catch (e) {
      console.error("Failed to add user:", e);
    }
  };
  

  const deleteContactHandler = (uuid) => {
    setUser( user.filter((u) => u.id!==uuid ) );
  };

  return (
    <div className='flex flex-col items-center'>
      {/* <Header />
       <AddUser addContactHandler = {addContactHandler} />
       <ContactList  user={user} deleteContactHandler = {deleteContactHandler} />  */}

        <Router>
          <Header />
          <Routes>
            <Route path='/signup' Component={SignupPage} ></Route>
            <Route path='/login' Component={LoginPage} ></Route>
            <Route path="/user/create" element = { <AddUser addContactHandler={addContactHandler} /> } ></Route>
            <Route path="/user/list" element = { <ContactList user={user} deleteContactHandler={deleteContactHandler} /> } ></Route>
          </Routes>
        </Router>

    </div>
  )
}
