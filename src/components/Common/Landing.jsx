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
              localStorage.removeItem('isLoggedIn')
              localStorage.removeItem('username')
              localStorage.removeItem('token')
              alert('Logged out!')
              window.location.reload()
  }
  const isLoggedIn  = localStorage.getItem('isLoggedIn')
  if (isLoggedIn === 'true') {
    const username = localStorage.getItem('username')
    return (  
      <Container>
        <h1 className="text-9xl font-bold text-tigetgold2 m-4 mt-0 p-4 pb-0 align-center">
          TIGET
        </h1>
        <p className="text-3xl mb-[20px] text-tigetgold">
          Welcome , {username}!
        </p>
        <p className=" text-xl text-[white] p-4 text-center">
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
      <h1 className="text-9xl font-bold text-tigetgold2 m-4 mt-0 p-4 pb-0 align-center">
        TIGET
      </h1>
      
      <p className="text-3xl mb-[20px] text-tigetgold">
        We are currently under development.
      </p>
      <p className="text-xl text-[white] p-4 text-center">
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