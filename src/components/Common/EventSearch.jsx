import React, { useEffect } from 'react'
import EventCard from './EventCard'
import styled from 'styled-components'
import Footer from './Footer'
import { useParams } from 'react-router-dom'

export default function EventsSearch() {
  const [eventData, setEventData] = React.useState([])
  const [isLoding, setIsLoding] = React.useState(true)
  const [isFound, setIsFound] = React.useState(true)
  const [tryState, setTryState] = React.useState(0)
  const { keyword } = useParams();
  useEffect(() => {
    fetch(`https://oauth.iamickdev.com/tiget/getEventByIncludeWord/${keyword}`, {
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
        setEventData(data.data)
        console.log('Event is ready!', data.data)
        if(data.status === 'error' && tryState < 5){
          setTryState(tryState+1)
        }else if(data.status === 'error' && tryState >= 5){
          setIsFound(false)
        }
        if(data.data.length < 1){
          setIsFound(false)
        }
        setIsLoding(false)
      })
  }, [keyword, tryState]);
  
  if(isLoding){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-tigetgold"></div>
        {/* loading text */}
      </div>
    )
  }
  
  /*
  [{
  "_id": "645dfe574c3b52fac3a88f57",
  "EventCode": "iPVA7lK9af",
  "EventType": "Online",
  "EventName": "Sample Event 3",
  "EventShortName": "SAMPLEEVENT3",
  "EventDate": "2021-07-31",
  "EventTime": "12:00:00",
  "EventDescription": "This is a sample event",
  "EventPoster": "https://i.imgur.com/3QXm2oF.jpg",
  "EventCoordinators": "Sample Coordinator 1, Sample Coordinator 2",
  "EventAvailable": null,
  "EventLiveStreaming": null
}]
  */
  if(!isFound){
    return (
      <Container>
        <h2 className="text-3xl text-tigetgold  font-bold mb-5">
        Search result for "{keyword}" not found.
        </h2><br />
        <button className="bg-tigetgold text-white font-semibold text-xl rounded-full px-8 py-2 mt-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" onClick={() => window.location.href='/'}>Back to Home</button>
        
      </Container>
      
      
      
      
    )
  }

  return (
    <Container>
      <h2 className="text-3xl text-tigetgold  font-bold mb-5">
      {eventData.length} Events found! 
      </h2><br />
      <EventList>
      {eventData.map((event, i) => {
        return (
          <EventCard
            key={event._id}
            title={event.EventName}
            desc={event.EventDescription}
            date={event.EventDate}
            keyname={event.EventCode}
            location={event.EventVenue}
            tag={event.EventTag}
            type={event.EventType}
            poster={event.EventPoster}
            status={event.EventStatus}
          />
        )
      })}
      </EventList>
      
    </Container>
    
    
    
    
  )
}





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
justify-content: space-between;
align-items: center;
align-content: center;
gap: 1rem;
overflow-y: scroll;
overflow-x: hidden;
::-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
`