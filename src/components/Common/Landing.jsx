import React from 'react'
import styled from 'styled-components'
import HomeSearch from './HomeSearch'
import userAuth from '../../apps/userAuth'

const Container = styled.div`
  background-color: #131313;
  padding: 5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

function Home() {
  const logOutHandle = () => {
    const confirm = window.confirm('Are you sure you want to logout?')
              if(!confirm) return
              localStorage.clear();
              alert('Logged out!')
              window.location.reload()
  }
  const isLoggedIn  = localStorage.getItem('isLoggedIn')
  // document.addEventListener("submit", (e) => {
  //   e.preventDefault()
  //   const searchEvent = document.getElementById('searchEvent').value
  //   window.location.href = `/Events/search/${searchEvent}`
  // })
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchEvent = e.currentTarget.elements.searchEvent.value;
    if(searchEvent === '') return alert('Please fill the keyword!');
    if(searchEvent.length < 3) return alert('Please fill the keyword with at least 3 characters!'
    );
    if(searchEvent.length > 20) return alert('Please fill the keyword with less than 20 characters!'
    );
    if(searchEvent.startWith('#')) return alert('Please fill the keyword without #!'
    );
    if(searchEvent.includes(' ')) return alert('Please fill the keyword without spaces!'
    );
    window.location.href = `/Events/search/${searchEvent}`;
  }

  if (isLoggedIn === 'true') {
    const username = localStorage.getItem('username')
    const userData = localStorage.getItem('userData');
    console.log(userData);
    return (  
      <Container>
        <h1 className="text-7xl md:text-9xl font-bold text-tigetgold2 m-4 mt-0 p-4 pb-0 align-center">
        TIGET
      </h1>
        <p className="text-3xl mb-[20px] text-tigetgold">
          Welcome , {username}!
        </p>

        <form id="SearchForm" className='hidden md:block' onSubmit={handleSubmit}>
        <div className="flex border-tigetgold border-4 rounded-full h-20 w-[10rem] md:w-[45rem] md:h-16 hover:border-8  mb-10">
            <input className="bg-transparent p-2 md:p-8 text-sm md:text-xl text-tigetgold text-bold h-full w-full md:w-[45rem] md:h-16 border-none placeholder-tigetgold focus:outline-none focus:border-transparent"
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
      
        <p className="hidden md:flex text-xl text-[white] p-4 text-center">
          Welcome to TIGET! We are currently under development.
          Wish you a great day!
        </p>
        <button className="bg-tigetgold text-black font-bold mt-6 py-2 px-4 rounded-full"
        onClick={logOutHandle}>
        Log out!
        </button>
      </Container>
    )
  }else{
    userAuth()
  }


  return (
    <Container>
      <h1 className="text-7xl md:text-9xl font-bold text-tigetgold2 m-4 mt-0 p-4 pb-0 align-center">
        TIGET
      </h1>

      <form id="SearchForm" className='hidden md:flex' onSubmit={handleSubmit}>
        <div className="flex border-tigetgold border-4 mt-4 md:m rounded-full h-20 w-[10rem] md:w-[45rem] md:h-16 hover:border-8  mb-10">
            <input className="bg-transparent p-2 md:p-8 text-sm md:text-xl text-tigetgold text-bold w-full md:w-[45rem] h-16 border-none placeholder-tigetgold focus:outline-none focus:border-transparent"
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

      
      <p className="hidden md:flex text-3xl mb-[20px] text-tigetgold">
        We are currently under development.
      </p>
      <p className="hidden md:flex text-xl text-[white] p-10 text-left md:text-center">
        You can register for our newsletter to get the latest updates.
      </p>
      <button className="bg-tigetgold text-black font-bold mt-6 py-2 px-4 rounded-full"
      onClick={() => {window.location.href = '/SignUp'}}
      >
        Register here!
        </button>
    </Container>
  )
}

export default Home