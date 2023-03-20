import React from 'react'
import styled from 'styled-components'
import HomeSearch from './HomeSearch'

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
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (isLoggedIn === 'true') {
    const username = localStorage.getItem('username')
    return (
      <Container>
        <h1 className="text-[183.883px] font-bold text-tigetgold2 m-4 p-4 pb-0 align-center">
          TIGET
        </h1>
        <HomeSearch />
        <p className="text-[36px] mb-[20px] text-tigetgold">
          Hello, {username}!
        </p>
        <p className="w-[894px] text-[23px] text-[white] p-4 text-center">
          Welcome to TIGET! We are currently under development.
          Wish you a great day!
        </p>
      </Container>
    )
  }
  
  return (
    <Container>
      <h1 className="text-[183.883px] font-bold text-tigetgold2 m-4 p-4 pb-0 align-center">
        TIGET
      </h1>
      <HomeSearch />
      <p className="text-[36px] mb-[20px] text-tigetgold">
        A website for buying event and concert tickets
      </p>
      <p className="w-[894px] text-[23px] text-[white] p-4 text-center">
        Making it easier and faster for everyone to book and buy ticket from
        the concert and event held buy your favorite artist.
      </p>
    </Container>
  )
}

export default Home