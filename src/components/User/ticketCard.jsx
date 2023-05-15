import React from 'react'

/*
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

function TicketCard(props) {
  const [ticketData, setTicketData] = React.useState([])
  const [isLoding, setIsLoding] = React.useState(true)
  const [tryCount, setTryCount] = React.useState(0);

  React.useEffect(() => {
    const result = fetch(`https://oauth.iamickdev.com/tiget/ticket/${props.TicketCode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if(data.status === 'ok'){
        setTicketData(data.data)
        setIsLoding(false)
        return result;
      }else{
        setTryCount(tryCount+1)
        if(tryCount > 5){
          setIsLoding(false)
          return result;
          
        }
      }
    }
    )

  }, [props.TicketCode, tryCount]);

  /*{"status":"ok","message":"Ticket found","data":{"ticket":{"_id":"645d09791aeb52cddf8cae43","EventCode":"S-3tIJBDdlCX","EventType":"offline","TicketOwnerData":{"TicketOwnerName":"Ticket Admin","TicketOwnerEmail":"hellotiget@hotmail.com","TicketOwnerPhone":"+66968825197","TicketOwnerAddress":"Bangkok, Thailand"},"TicketCode":"SAMPLECODE1","TicketZone":"A","TicketSeat":1,"TicketType":"VIP","TicketPrice":6500,"TicketStatus":"isPending"},"event":{"_id":"645e5d806f2caa2049978abf","EventCode":"S-3tIJBDdlCX","EventShortName":"CONANGRAY","EventName":"CONAN GRAY SUPERACHE TOUR ASIA 2023","EventDate":"2023-02-22","EventTime":"18:00 AM","EventLocation":"IMPACT EXHIBITION...","EventDescription":"Conan Gray is bringing his Superache Tour to Taipei for the first time! Come and get captivated by his...","EventTag":"#SINGLE, #CONANGRAY, #SUPERACHE","EventPoster":"https://www.thaiticketmajor.com/cmsimg/imgeditor/banner-press-conan.jpg","EventType":"offline","EventCoordinators":"JYP","EventAvailableZone":["A","B","C","D","E","F","G","H","I","J","K","L"],"EventAvailableSeats":[{"Zone":"A","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15]"},{"Zone":"B","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"},{"Zone":"C","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"},{"Zone":"D","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9]"},{"Zone":"E","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9]"},{"Zone":"F","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9]"},{"Zone":"G","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9]"},{"Zone":"H","Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9]"}],"EventStatus":"active"}}} */
  
  if(isLoding){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-tigetgold"></div>
        Ticket loading...
      </div>
    )
  }



  const isActived = ticketData.ticket.TicketStatus === 'isApproved' ? 'w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-gray-600/20  m-4 ' : 'w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-transparent m-4 grayscale';
  const isActiveLink = ticketData.ticket.TicketStatus === 'isApproved' ? "/LiveTest" : "#";
  return (
    <a href={isActiveLink} key={props.key} id={props.key}>
            <div
              className={isActived}>
              <img className='w-[200px]' src={ticketData.event.EventPoster} alt={ticketData.ticket.TicketCode+"_poster"} />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2 text-tigetgold">
                  <p>Event: {ticketData.event.EventName}</p>
                </div>
                <p className="text-white text-sm pt-2 pb-2 font-normal">
                  &nbsp; {ticketData.event.EventDate} at {ticketData.event.EventTime}
                </p>
                <p className="text-white text-sm pt-2 pb-2 font-normal">Location : </p>
                <span className="flex flex-row pt-2 pb-2">
                  <p className="text-white font-semibold">{ticketData.event.EventVenue}</p>
                </span>
                <p className="text-xl text-tigetgold">
                    Name : {ticketData.ticket.TicketOwnerData.TicketOwnerName}
                  </p>

                <p className="text-white font-bold text-[15px] mt-2">
                  Status : {ticketData.ticket.TicketStatus}
                </p>
                
              </div>
            </div>
            </a>
  )
}

export default TicketCard;