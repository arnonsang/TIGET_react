import React, { useState } from 'react'


function Navbar() {
  return (
    <nav className="w-screen h-[100px] flex flex-row bg-[#131313]">
    <a href="/">
    <div className="flex flex-1 ml-16 text-center items-center justify-center">
      
      {/* <img src="./figmaAssets/logo.png" class="w-16 m-4" alt="" /> */}
      <button className="btn-style-none text-tigetgold p-6 text-[37px] font-bold text-center">
        TIGET
      </button>
    </div>
  </a>
    <div className="grow">&nbsp;</div>
    <div className="items-center mr-16">
      <ul className="list-style-none text-left flex flex-row items-center mt-4">
        <li className="m-4 text-tigetgold text-[17px] font-normal hover:text-[white] hover:font-semibold">
          <a href="/Home" >Home</a>
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
          &nbsp;
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar