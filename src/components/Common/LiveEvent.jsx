import React from 'react'
import styled from 'styled-components'

function LiveStreaming() {
  return (
    <>
    <Container>
        <div class="flex flex-row">
        <iframe className='flex grow' width={1050} height={550} src="https://www.youtube.com/embed/MYTfTKGSRr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="flex flex-1" height={550} src="https://socketchat--arnonsang-ngern.repl.co" id='chat' title='tigetChat' frameborder="0"></iframe>
        </div>
    </Container>
    </>
    
  )
}

export default LiveStreaming


const Container = styled.div`
  background-color: #131313;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;