import React from 'react'

function Footer() {
  return (
    <footer className="w-screen h-36 bg-gradient-to-t from-black to-[#131313] flex flex-col justify-center items-center p-10 mb-0">
      <h2 className="text-tigetgold italic font-semibold">PASSION FRUIT</h2>
      <p className="text-white">126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand</p>
      <p className="text-white underline underline-offset-2">+(66) 8 348 1406 | <a href="mailto:hellotiget@hotmail.com">hellotiget@hotmail.com</a></p>
      <p className="text-tigetgold mt-4">&copy; 2023 Copyright : TIGET</p>
      {" "}
    </footer>
  )
}

export default Footer