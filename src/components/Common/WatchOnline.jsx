import React from 'react'

function WatchOnline() {
  return (
    <div className="container">
      <form action="/Ticket/checkTicket" method="get">
        <div className="w-full flex flex-col justify-center items-center">
          
          <p className="text-tigetgold text-3xl mt-8 font-semibold">Live Streaming</p>
          <input className="mt-8 w-full lg:w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold" type="text" name="ticketCode" id="" readOnly placeholder="Under development!"></input>

          <button className="h-[3rem] w-full lg:w-[10rem] bg-tigetgold mt-12 text-white text-lg text-bold rounded-full mb-2" disabled type="submit">Watch now!</button>
          <p className="text-tigetgold text-sm font-semibold underline">or <a href='/Login'>Login?</a></p>
        </div>  
      </form>
    </div>
  )
}

export default WatchOnline