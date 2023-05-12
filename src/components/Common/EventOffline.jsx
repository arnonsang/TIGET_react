import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'

function EventOffline() {
  const [eventData, setEventData] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(true)
  const { eventCode } = useParams();
  const [tryState, setTryState] = React.useState(0)
  useEffect(() => {

    fetch(`https://oauth.iamickdev.com/tiget/getEvent/${eventCode}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.status === 'error'){
          setTryState(tryState+1)
        }else{
          setEventData(data.data)
          console.log('Event is ready!', data.data)
          setIsLoading(false)
          document.title = `${data.data.EventName} | TIGET`
        }
      })
  }, [eventCode, tryState])

  

  if(isLoading){
    return <Loading/>
  }
  /*
  event data example
  {
  "_id": "645d096c1aeb52cddf8cae3f",
  "EventCode": "SAMPLEEVENT1",
  "EventType": "offline",
  "EventName": "Offline Event 1",
  "EventShortName": "OFFEVT1",
  "EventDate": "11-05-2020",
  "EventTime": "10:00 AM",
  "EventVenue": "Union Hall",
  "EventDescription": "Sample Description for Offline Event 1",
  "EventPoster": "https://placeholder.pics/svg/375x500",
  "EventTag": "#TIGETTAG1, #TIGETTAG2, #TIGETTAG3",
  "EventStatus": "active",
  "EventCoordinators": "TIGET_ADMIN",
  "EventAvailableZone": ["A", "B", "C" ,"D", "E", "F", "G", "H", "I", "J", "K", "L"],
  "EventAvailableSeats": [
    {
      "Zone": "A",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15]"
    },
    {
      "Zone": "B",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },
    {
      "Zone": "C",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },
    {
      "Zone": "D",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "E",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "F",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "G",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    },
    {
      "Zone": "H",
      "Seat": "[1, 2, 3, 4, 5, 6, 7, 8, 9]"
    }
  ]
}
  */
  
  return (
    <>
      <Container>
        <div className="flex flex-col bg-[url('https://picsum.photos/200/300')] bg-cover bg-center">
          <div class="w-full h-full flex flex-col xl:flex-row justify-left items-left backdrop-blur-lg">
            <div className="blur-none">
              <img
                className="w-[33.125rem] h-[35.5rem] object-fit"
                src={eventData.EventPoster}
                alt={eventData.EventShortName+"'s_poster"}
              />
            </div>
            <div className="p-16">
              <h1 className="font-bold text-3xl text-tigetgold drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
                {eventData.EventName}
              </h1>
              <h2 className="font-semibold text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-8">
                {eventData.EventDescription}
              </h2>
              <h3 className="font-semibold text-xl text-tigetgold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4">
                {eventData.EventDate} at {eventData.EventVenue}
              </h3>
              <p className="font-semibold text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-4">
                {eventData.EventTag}
              </p>
              <a href="#buyticket">
                {" "}
                <button className="bg-tigetgold text-white font-semibold text-xl rounded-full px-8 py-2 mt-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Buy Ticket
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Event Rule */}
        <div className="mt-16 flex flex-col items-left justify-left">
        <h1 className="ml-6 text-3xl font-bold text-tigetgold">Conditions for purchasing</h1>
            <div className="ml-8 pt-2">
                <p className="text-lg font-semibold text-white">1. Limit 1 ticket per time.</p>
                <p className="text-lg font-semibold text-white">2. Ticket can't be refund.</p>
                <p className="text-lg font-semibold text-white">3. Ticket can't be transfered.</p>
                <p className="text-lg font-semibold text-white">4. Ticket can't be resold.</p>
                <p className="text-lg font-semibold text-white">5. Ticket can't be used for other events.</p>
                <p className="text-lg font-semibold text-white">6. Pre-sale tickets are limited and on a first-come-first-serve basis. </p>
                <p className="text-lg font-semibold text-white">7. Full name of the ticket owner must be specified when purchasing tickets and the name will be printed on the ticket. Please make sure that the information is provided correctly before making the payment.</p>
                <p className="text-lg font-semibold text-white">8. Online ticketing can be paid with Paypal and QR code Promptpay. </p>
                <p className="text-lg font-semibold text-white">9. Convenience fee 3% will be applied when making the payment with a credit card, debit card, or True Wallet . 0.5% convenience fee will be applied for payment via Paypal and QR code Promptpay.</p>
                <p className="text-lg font-semibold text-white">10. The ticket will be sent to the email address provided within 24 hours after the payment is made. </p>
            </div>
      </div>

        {/* Ticket buy form*/}
        <div className="mt-8 w-full flex flex-col xl:flex-row ">
        <img className="grow" src="https://placeholder.pics/svg/500x600/DEDEDE/555555/Event%20Plan" alt="poster" />

        
        <div className="mt-8 xl:mt-0 flex-1 flex-col items-left justify-left">
            <h1 className="ml-6 text-3xl font-bold text-tigetgold" id="buyticket">Select Zone</h1>
            {/*map seat selection */}
            <div className="ml-8 pt-2">
                <p className="text-lg font-semibold text-white">Seat Selection is under development</p>
              </div>  
        </div>
    </div>

    </Container>
    </>
  )
}

export default EventOffline;

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