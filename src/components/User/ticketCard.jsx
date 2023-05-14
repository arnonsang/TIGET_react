import React from 'react'

function TicketCard(props) {
  const isActived = props.status === 'approved' ? 'w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-gray-600/20  m-4 ' : 'w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-transparent m-4 grayscale';
  // const isActiveLink = props.status === 'active' ? "/Events/"+props.keyname.trim() : "/Events";
  const isActiveLink = "https://tiget.bysamnorr.proj.iamickdev.com/watchOnline/Live?ticketCode=O-yzBlsi"


  return (
    <a href={isActiveLink} key={props.key} id={props.key}>
            <div
              className={isActived}>
              <img className='w-[200px]' src={"https://placeholder.pics/svg/150x220/291F00/FFCE00-000000"} alt={props.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2 text-tigetgold">
                  <p>Event: {props.title}</p>
                </div>
                <p className="text-white text-sm pt-2 pb-2 font-normal">
                  &nbsp; {props.date}
                </p>
                <p className="text-white text-sm pt-2 pb-2 font-normal">Location : </p>
                <span className="flex flex-row pt-2 pb-2"><img src="" alt="markerIcon" />
                  <p className="text-white font-semibold">{props.location}</p>
                </span>
                <p className="text-xl text-tigetgold">
                    Name : {props.fullname}
                  </p>

                <p className="text-white font-bold text-[15px] mt-2">
                  Status : {props.purchaseStatus}
                </p>
              </div>
            </div>
            </a>
  )
}

export default TicketCard;