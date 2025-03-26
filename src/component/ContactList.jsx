import React, { useState } from 'react'
import ContactCart from './ContactCart'

export default function ContactList( {user,deleteContactHandler} ) {

  return (
    <div>
        <ContactCart users={user} deleteContact={deleteContactHandler} />
    </div>
  )
}
