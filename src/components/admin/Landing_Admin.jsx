import React from 'react'
import CardAdmin from './Card_Admin'
import event from '../../assets/images/event_placeholder.png';
import ticket from '../../assets/images/ticket_placeholder.png';
import user from '../../assets/images/user_placeholder.png';
import adminAuth from '../../apps/adminAuth';

export default function LandingAdmin() {
  // check if admin is logged in
  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    adminAuth().then((res) => {
      setAuth(res)
    })
    if (!auth) window.location.href = '/admin/login';
  }, [auth])
   // get admin username
  const admin = localStorage.getItem('admin')
  return (
    // display all link with card style for admin
    <div className='flex flex-col align-middle items-center text-center'><br />
        <h1 className='text-tigetgold text-3xl mb-4 font-extrabold'>Hello, {admin}</h1>
        <div className='flex flex-wrap'>
            <CardAdmin title="Manage Event" desc="Manage all event" poster={event} link="https://tiget.bysamnorr.proj.iamickdev.com/admin/viewEvents/tiget1234"/>
            <CardAdmin title="Manage User" desc="Manage all user" poster={user} link="/ManageUser"/>
            <CardAdmin title="Manage Ticket" desc="Manage all ticket" poster={ticket} link="https://tiget.bysamnorr.proj.iamickdev.com/admin/ViewAllTicket/tiget1234"/>
        </div>
      </div>
  )
}
