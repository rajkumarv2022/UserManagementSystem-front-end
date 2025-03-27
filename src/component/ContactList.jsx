import React, { useState } from 'react'
import ContactCart from './ContactCart'

export default function ContactList( {user,deleteContactHandler} ) {

  return (
    <div className='flex flex-col w-full h-full'>
        <ContactCart users={user} deleteContact={deleteContactHandler} />
    </div>
  )
}
