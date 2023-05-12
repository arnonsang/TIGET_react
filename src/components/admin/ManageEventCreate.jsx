import React from 'react'
import styled from 'styled-components'

function ManageEventCreate() {

    document.addEventListener("submit", (e) => {
        e.preventDefault()
        const EventName = document.getElementById('EventName').value
        const EventShortName = document.getElementById('EventShortName').value
        const EventDescription = document.getElementById('EventDescription').value
        const EventPoster = document.getElementById('EventPoster').value
        const EventCoordinators = document.getElementById('EventCoordinators').value
        const EventVenue = document.getElementById('EventVenue').value
        const EventDate = document.getElementById('EventDate').value
        const EventTime = document.getElementById('EventTime').value
        const EventType = document.getElementById('EventType').value
        const EventTag = document.getElementById('EventTag').value
        const EventAvailable = document.getElementById('EventAvailable').value
        const EventLiveStreaming = document.getElementById('EventLiveStreaming').value

        if(EventType === 'Online'){
            fetch('https://oauth.iamickdev.com/tiget/createEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    body: JSON.stringify({
                        EventName: EventName,
                        EventShortName: EventShortName,
                        EventDescription: EventDescription,
                        EventPoster: EventPoster,
                        EventCoordinators: EventCoordinators,
                        EventVenue: EventVenue,
                        EventDate: EventDate,
                        EventTime: EventTime,
                        EventType: EventType,
                        EventTag: EventTag,
                        EventAvailable: EventAvailable,
                        EventLiveStreaming: EventLiveStreaming
                    })
                    })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if(data.status === 'ok'){
                        alert('Event created successfully!')
                        window.location.href = '/admin/Landing'
                    }else{
                        alert('Unable to create event, please try again.')
                    }
                })
        }else{
            fetch('https://oauth.iamickdev.com/tiget/createEvent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    body: JSON.stringify({
                        EventName: EventName,
                        EventShortName: EventShortName,
                        EventDescription: EventDescription,
                        EventPoster: EventPoster,
                        EventCoordinators: EventCoordinators,
                        EventVenue: EventVenue,
                        EventDate: EventDate,
                        EventTime: EventTime,
                        EventType: EventType,
                        EventTag: EventTag,
                    })
                    })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if(data.status === 'ok'){
                        alert('Event created successfully!')
                        window.location.href = '/admin/Landing'
                    }else{
                        alert('Unable to create event, please try again.')
                    }
                })
        }
    })
    

  return (
    <Container>
        {/* Create new event */}
        <div className="flex flex-col justify-left items-left gap-2">
            <h1 className="text-3xl font-bold text-tigetgold">Create new event</h1>
            <form className="flex flex-col justify-left items-left gap-2">
                <input type="text" name="EventName" id="" placeholder="Event Name" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="text" name="EventShortName" id="" placeholder="Event Short Name" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="text" name="EventDescription" id="" placeholder="Event Description" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="url" name="EventPoster" id="" placeholder="Event Poster URL" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="text" name="EventCoordinators" id="" placeholder="Event Coordinators" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="text" name="EventVenue" id="" placeholder="Event Venue" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="date" name="EventDate" id="" placeholder="Event Date" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <input type="time" name="EventTime" id="" placeholder="Event Time" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full placeholder-tigetgold"></input>
                <select name="EventType" id="" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
                <input type="text" name="EventTag" id="" placeholder="Event Tag" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold rounded-full"></input>
                <label htmlFor="ONLINE" className="text-tigetgold text-2xl font-bold">For Online Event</label>
                <input type="text" name="EventAvailable" id="" placeholder="Event Available" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px] border-tigetgold"></input>
                <input type="text" name="EventLiveStreaming" id="" placeholder="Event Live Streaming" className="w-[35rem] h-[3rem] p-8 text-tigetgold text-2xl bg-transparent border-solid border-[5px]"></input>
                <button type="submit" className="w-[35rem] h-[3rem] bg-tigetgold text-white text-2xl rounded-full">Create Event</button>
            </form>
        </div>
    </Container>
  )
}


export default ManageEventCreate

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