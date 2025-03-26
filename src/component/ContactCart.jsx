import React, { useEffect } from 'react'

export default function ContactCart( {users,deleteContact} ) {

  return (
    <div className='flex flex-col items-center justify-center'>
        {
            users.map((user) => (
                <ul key={user.id}>
                    <li>id : {user.id}</li>
                    <li>name : {user.name}</li>
                    <li>email : {user.email}</li>
                    <button onClick={() => deleteContact(user.id)} className='bg-red-400 text-white px-2 py-4' >Delete</button>
                </ul>
             ) )
        }
    </div>
  )
}
