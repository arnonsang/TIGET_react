import React from 'react'
import styled from 'styled-components'

import UserInfo from './userInfo'
import TicketCard from './ticketCard'
import Loading from '../Loading'

export default function TicketList() {
  const user = JSON.parse(localStorage.getItem('userData'));
  if(!user){window.location.href = "/Login";}
  //fetch data from https://tiget.bysamnorr.proj.iamickdev.com/apis/ticket/tigetClient/icedkung1596@gmail.com
  const [ticketData, setTicketData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  //mockup email
  

  React.useEffect(() => {
    let email;
  if(user.email === "hellotiget@hotmail.com" || user.email === "hellotigetadmin@hotmail.com"){
    email = "icedkung1596@gmail.com"
  }else{
    email = user.email;
  }
    fetch(`https://tiget.bysamnorr.proj.iamickdev.com/apis/ticket/tigetClient/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setTicketData(data)
        console.log(data)
        setIsLoading(false)
      })
  }, [user.email]);

  if(isLoading){
    return <Loading/>
  }
  /*
  example ticket data
    {
  "_id": {
    "$oid": "645d09791aeb52cddf8cae43"
  },
  "EventCode": "SAMPLEEVENT1",
  "EventType": "offline",
  "TicketOwnerData": {
    "TicketOwnerName": "Ticket Admin",
    "TicketOwnerEmail": "hellotiget@hotmail.com",
    "TicketOwnerPhone": "+66968825197",
    "TicketOwnerAddress": "Bangkok, Thailand"
  },
  "TicketCode": "SAMPLECODE1",
  "TicketZone": "A",
  "TicketSeat": 1,
  "TicketType": "VIP",
  "TicketPrice": 6500,
  "TicketStatus": "isPending"
}
  */
  if (ticketData.res.length === 0) {
    return (
      <>
        <Container>
          <UserInfo />
          {/* You Do'nt have any ticket with back to home button */}
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-bold text-tigetgold mt-4">You don't have any ticket on TIGET!</h1>
            <button className="bg-tigetgold hover:bg-tigetgoldLight text-white hover:text-tigetblack font-bold py-2 px-4 rounded mt-8" onClick={() => window.location.href = "/Events"}>Buy ticket?</button>
          </div>
          </Container>
      </>
    );
  }

  return (
    <>
      <Container>
      <UserInfo />
      <div className="flex flex-wrap justify-center gap-8 items-center">
      { 
        
        ticketData.res.map((item) => {
          
          return (
            <TicketCard 
            key={item.ticketCode +"_"+ item.BuyerName}
            keyname={item.EventCode}
            status={item.BuyerPaymentStatus} 
            title={item.EventCode}
            date={"TBA"}
            location={"TBA"}
            fullname={item.BuyerName}
            purchaseStatus={item.BuyerPaymentStatus}
            poster={"NoPOSTER"}
            />
          )
        })
      }
      </div>
      </Container>
    </>

  )
}



const Container = styled.div`
width: 100%;
background-color: #131313;
padding: 5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: center;
gap: 1rem;
scroll-behavior: smooth;
overflow-y: scroll;
overflow-x: hidden;
::-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
`