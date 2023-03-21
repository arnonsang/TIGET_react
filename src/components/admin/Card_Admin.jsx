import React from 'react'

function CardAdmin( {title , desc, poster, link}) {

  return (
    <a href={link}>
            <div
              className={"w-[475px] h-[274px] flex flex-row rounded overflow-hidden shadow-lg bg-gray-600/50 m-4"}>
              <img className='w-[200px]' src={poster} alt={title} />
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2 text-tigetgold">
                  <p>{title}</p>
                </div>
                <p className="text-[10px] text-tigetgold">
                    {desc}
                  </p>
              </div>
            </div>
            </a>
  )
}

export default CardAdmin