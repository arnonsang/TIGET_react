import React, { useEffect } from 'react'
import EventCard from './EventCard'
import styled from 'styled-components'

function Events() {
  const [eventData, setEventData] = React.useState([])
  useEffect(() => {
    fetch('http://tiget.bysamnorr.proj.iamickdev.com/apis/tigetData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        })
      .then((response) => response.json())
      .then((data) => {
        setEventData(data)
        console.log('Event is ready!')
      })
  }, []);

  const EventList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
  `

  const Container = styled.div`
    background-color: #131313;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  `

  return (
    <Container>
      <p className="text-3xl text-gray-700 font-bold mb-5">
      Events!
      </p><EventList>
      {eventData.map((event, i) => {
        return (
          <EventCard
            title={eventData[i].EventTitle}
            desc={eventData[i].EventDesc}
            date={eventData[i].EventDate}
            location={eventData[i].EventLocation}
            tag={eventData[i].EventTag}
            poster={eventData[i].EventPoster}
            status={eventData[i].EventStatus}
          />
        )
      })}
      </EventList>
    </Container>
    
  )
}

export default Events