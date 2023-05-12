import React from 'react'
import CardAdmin from './Card_Admin'
import adminAuth from '../../apps/adminAuth';

export default function LandingAdmin() {
  // check if admin is logged in
  const [auth, setAuth] = React.useState(false);
  const admin = localStorage.getItem('admin')
  React.useEffect(() => {
      if(admin) return;
      const isLogged = adminAuth("/Landing");
      if(isLogged){
          console.log("User is logged in");
          setAuth(true);
      } else {
          console.log("User is not logged in");
      }
  }, [admin])
   // get admin username
  
  return (
    // display all link with card style for admin
    <div className='flex flex-col align-middle items-center text-center'><br />
        <h1 className='text-tigetgold text-3xl mb-4 font-extrabold'>Hello, {admin}</h1>
        <div className='flex flex-wrap'>
            <CardAdmin title="Create Event" desc="Create new event" poster={"https://placeholder.pics/svg/375x500"} link="/createEvent"/>
            <CardAdmin title="Manage User" desc="Manage all user" poster={"https://placeholder.pics/svg/375x500"} link="/ManageUser"/>
            <CardAdmin title="Manage Ticket" desc="Manage all ticket" poster={"https://placeholder.pics/svg/375x500"} link="https://tiget.bysamnorr.proj.iamickdev.com/admin/ViewAllTicket/tiget1234"/>
        </div>
      </div>
  )
}
