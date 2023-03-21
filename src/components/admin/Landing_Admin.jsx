import React from 'react'
import CardAdmin from './Card_Admin'

function LandingAdmin() {

  const admin = localStorage.getItem('admin')
  return (
    // display all link with card style for admin
    <div>
        <h1>Hello {admin}</h1>
        
        <CardAdmin title="Manage Event" desc="Manage all event" poster="https://images.unsplash.com/photo-1616161610003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" link="/ManageEvent"/>
        <CardAdmin title="Manage User" desc="Manage all user" poster="https://images.unsplash.com/photo-1616161610003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" link="/ManageUser"/>
        <CardAdmin title="Manage Ticket" desc="Manage all ticket" poster="https://images.unsplash.com/photo-1616161610003-8b2b2b2b2b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" link="/ManageTicket"/>
    </div>

    
  )
}

export default LandingAdmin