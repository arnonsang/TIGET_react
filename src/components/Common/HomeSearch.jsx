import React from 'react'

function HomeSearch() {
  return (
    <form action="/Events/search">
        <div className="flex border-tigetgold border-4 rounded-full w-[725px] h-16 hover:border-8  mb-10">
            <input className="bg-transparent p-8 text-xl text-tigetgold text-bold w-[725px]  h-16 border-none placeholder-tigetgold focus:outline-none focus:border-transparent"
            type="search" name="searchEvent" id="searchEvent" placeholder="Search your event here!" required/>

            <button type="submit">
            <div className="grid place-items-center h-full w-12 text-tigetgold mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </button>
        </div>
      </form>
  )
}

export default HomeSearch