import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

function EventOnline() {
    const [eventData, setEventData] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(true)
  const { eventCode } = useParams();
  const [tryState, setTryState] = React.useState(0)
  React.useEffect(() => {

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

  const formhandler = (e) => {
    e.preventDefault()
    const fullname = e.currentTarget.elements.fullname.value
    const email = e.currentTarget.elements.email.value
    const phone = e.currentTarget.elements.phone.value
    const address = e.currentTarget.elements.address.value
    const tickettype = e.currentTarget.elements.tickettype.value
    const paymentmethod = e.currentTarget.elements.paymentmethod.value
    console.log(fullname, email, phone, address, tickettype, paymentmethod)
    setIsLoading(true)
    fetch('https://oauth.iamickdev.com/tiget/bookTicket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        body: JSON.stringify({
          EventCode: eventCode,
          fullname: fullname,
          email: email,
          phone: phone,
          address: address,
          tickettype: tickettype,
          paymentmethod: paymentmethod
        })
        })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.status === 'ok'){
          alert('Ticket booked successfully!')
          window.location.href = '/'
          setIsLoading(false)
        }else{
          alert('Unable to book ticket, please try again.')
          setIsLoading(false)
        }
      }
      )
  }
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <Container>
        <div className="flex flex-col bg-[url('https://picsum.photos/200/300')] bg-cover bg-center">
          <div className="w-full h-full flex flex-col xl:flex-row justify-left items-left backdrop-blur-lg">
            <div className="blur-none">
              <img
                className="w-[33.125rem] object-cover"
                src={eventData.EventPoster}
                alt={eventData.EvenShortName+"s_poster"}
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
        <img className="flex w-[33.125rem] object-cover" src={eventData.EventPoster} alt="poster" />

        
        <div className="mt-8 xl:mt-0 flex grow flex-col items-left justify-left">
            <h1 className="ml-6 text-3xl font-bold text-tigetgold" id="buyticket">Buy Ticket</h1>
            <form className="ml-8 pt-2" onSubmit={formhandler}>
                <div className="flex flex-col">
                    <label className="text-lg font-semibold text-white">Full Name</label>
                    <input className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" type="text" placeholder="Full Name" name="fullname" id="fullname" />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-lg font-semibold text-white">Email</label>
                    <input className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" type="email" placeholder="Email" name="email" id='email' />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-lg font-semibold text-white">Phone Number</label>
                    <input className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" type="tel" placeholder="Phone Number"  name="phone" id='phone'/>
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-lg font-semibold text-white">Address</label>
                    <input className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" type="text" placeholder="Address" name="address" id='address'/>
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-lg font-semibold text-white" >Ticket Type</label>
                    <select className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" name="tickettype" id="tickettype">
                        <option value="GA" selected>General Admission</option>
                        <option value="VIP">VIP</option>
                        <option value="VVIP">VVIP</option>
                    </select>
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-lg font-semibold text-white" >Payment Method</label>
                    <select className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" name="paymentmethod" id="paymentmethod">
                        <option value="1" selected>Credit Card</option>
                        <option value="2">Debit Card</option>
                        <option value="3">True Wallet</option>
                        <option value="4">Paypal</option>
                        <option value="5">QR Code Promptpay</option>
                    </select>
                </div>

                <div className="flex flex-col mt-4"name="price">
                    <label className="text-lg font-semibold text-white">Price</label>
                    <input className="w-full xl:w-[30rem] h-[2rem] rounded-lg bg-gray-600/50 text-white text-lg font-semibold p-2 mt-2" type="text" placeholder="FREE FOR NOW" readOnly/>
                </div>
                {/* submit button */}
                <button  className="w-full xl:w-[30rem] bg-tigetgold hover:cursor-pointer text-tigetblack font-semibold text-xl rounded-full px-8 py-2 mt-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Buy ticket!</button>
            </form>
        </div>
    </div>

    </Container>
    </>
  );
}

export default EventOnline;


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