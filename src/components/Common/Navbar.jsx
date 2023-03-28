import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import userAuth from '../../apps/userAuth'
import logo from '../../assets/images/logo.png'


function Navbar() {

  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if(isLoggedIn === 'true'){
    const username = localStorage.getItem('username')
    return (
      <>
      <nav className=" w-screen h-[100px] flex flex-row bg-[#131313]">
        <a href="/">
          <div className="flex flex-1 ml-16 text-center items-center justify-center">

            {/* <img src={logo} className="w-16 m-4" alt="tigetLogo" /> */}
            <button className="btn-style-none text-tigetgold p-6 text-[37px] font-bold text-center">
              TIGET
            </button>
          </div>
        </a>
        <div className="grow">&nbsp;</div>
        <div className="items-center mr-16">
          <ul className="list-style-none text-left flex flex-row items-center mt-4">
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/Home">Home</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/Events">Events</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/AboutUs">About Us</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/MyTicket">My Ticket</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
            
            <a href="#!" onClick={()=>{
              const confirm = window.confirm('Are you sure you want to logout?')
              if(!confirm) return
              localStorage.removeItem('isLoggedIn')
              localStorage.removeItem('username')
              localStorage.removeItem('token')
              alert('Logged out!')
              window.location.reload()
            }}>Logout</a>
            </li>
            <img src={"https://api.lorem.space/image/face?w=150&h=150"} alt="userimg" className='rounded-xl w-8' />

          </ul>
        </div>
      </nav></>
    )
  }else{
    userAuth();
  }

  return (
    <>
      <nav className=" w-screen h-[100px] flex flex-row bg-[#131313]">
        <a href="/">
          <div className="flex flex-1 ml-16 text-center items-center justify-center">

            {/* <img src={logo} className="w-16 m-4" alt="tigetLogo" /> */}
            <button className="btn-style-none text-tigetgold p-6 text-[37px] font-bold text-center">
              TIGET
            </button>
          </div>
        </a>
        <div className="grow">&nbsp;</div>
        <div className="items-center mr-16">
          <ul className="list-style-none text-left flex flex-row items-center mt-4">
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/Home">Home</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/Events">Events</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/watchOnline">OnlineTicket</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/Ticket">Check Ticket</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
              <a href="/AboutUs">About Us</a>
            </li>
            <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
            <a href="/Login">Login</a>
            </li>
          </ul>
        </div>
      </nav></>
  )
}

export default Navbar