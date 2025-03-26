import React from 'react'
import ContactCart from './ContactCart'

export default function ContactList( {user} ) {
  return (
    <div>
        <ContactCart users={user} />
    </div>
  )
}
