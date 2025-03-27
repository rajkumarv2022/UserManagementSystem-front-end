import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex flex-col items-center text-2xl w-full gap-12 mt-4 bg-green-200 justify-center'>
      <div>
        <p className='text-blue-800 text-4xl font-bold'>User Management System</p>
      </div>
      <div className='flex flex-row items-center justify-around w-full mb-3'>
       <Link to="/singup" > <button className='bg-blue-500 px-4 py-2 text-white text-lg rounded-md' >Signup</button> </Link> 
       <Link to="/login"> <button className='bg-blue-500 px-4 py-2 text-white text-lg rounded-md' >Login</button> </Link> 
       <Link to="/user/create"><button className='bg-blue-500 px-4 py-2 text-white text-lg rounded-md' >CreateUser</button> </Link>
        <Link to="/user/list"> <button className='bg-blue-500 px-4 py-2 text-white text-lg rounded-md' >UserList</button> </Link>
      </div>
    </div>
  )
}
