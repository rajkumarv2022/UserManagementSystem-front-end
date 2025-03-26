import React from 'react'

export default function ContactCart( {users} ) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {
            users.map((user) => (
                <ul>
                    <li key={user.id} >name : {user.name}</li>
                    <li>email : {user.email}</li>
                </ul>
             ) )
        }
    </div>
  )
}
