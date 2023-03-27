import React from 'react'

function EventCard(props) {
  const isActived = props.status === 'active' ? 'w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-gray-600/50 m-4 ' : 'w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-gray-600/50 m-4 grayscale';
  const isActiveLink = props.status === 'active' ? "/Events/"+props.keyname.trim() : "/Events";

  return (
    <a href={isActiveLink} key={props.key} id={props.key}>
            <div
              className={isActived}>
              <img className='w-[200px]' src={props.poster} alt={props.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2 text-tigetgold">
                  <p>{props.title}</p>
                </div>
                <p className="text-white text-sm pt-2 pb-2 font-normal">
                  &nbsp; {props.date}
                </p>
                <span className="flex flex-row pt-2 pb-2"><img src="./figmaAssets/marker.png" alt="" />
                  <p className="text-white font-semibold">{props.location}</p>
                </span>
                <p className="text-[10px] text-tigetgold">
                    {props.desc}
                  </p>

                <p className="text-white font-bold text-[15px] mt-2">
                  {props.tag}
                </p>
              </div>
            </div>
            </a>
  )
}

export default EventCard