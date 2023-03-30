import React from 'react'
import UserInfo from './userInfo'
import TicketCard from './ticketCard'

function TicketList() {
  const mockupTicketData = {
    status: 'ok',
    data: [
      {
        keyname: 'TIGET2023ID1',
        status: 'active',
        title: 'TIGET 2023 ID1',
        date: '20-12-2023',
        location: 'Bangkok Convention Center',
        fullname: 'TIGET TEST01',
        purchaseStatus: 'Paid',
        poster:"https://api.lorem.space/image/movie?w=150&h=220"
      },
      {
        keyname: 'TIGET2023ID2',
        status: 'active',
        title: 'TIGET 2023 ID2',
        date: '20-12-2023',
        location: 'Bangkok Convention Center',
        fullname: 'TIGET TEST02',
        purchaseStatus: 'Paid',
        poster:"https://api.lorem.space/image/movie?w=150&h=220"
      },
      {
        keyname: 'TIGET2023ID3',
        status: 'inactive',
        title: 'TIGET 2023 ID3',
        date: '20-12-2023',
        location: 'Bangkok Convention Center',
        fullname: 'TIGET TEST03',
        purchaseStatus: 'Unpaid',
        poster:"https://api.lorem.space/image/movie?w=150&h=220"
      },
      {
        keyname: 'TIGET2023ID4',
        status: 'active',
        title: 'TIGET 2023 ID4',
        date: '20-12-2023',
        location: 'Bangkok Convention Center',
        fullname: 'TIGET TEST04',
        purchaseStatus: 'Paid',
        poster:"https://api.lorem.space/image/movie?w=150&h=220"
        
      }
    ]
  }
  return (
    <>
  
      <UserInfo />
      <div className="flex flex-wrap justify-center gap-8 items-center">
      {
        mockupTicketData.data.map((item) => {
          return (
            <TicketCard 
            key={item.keyname}
            keyname={item.keyname}
            status={item.status} 
            title={item.title}
            date={item.date}
            location={item.location}
            fullname={item.fullname}
            purchaseStatus={item.purchaseStatus}
            poster={item.poster}
            />
          )
        })
      }
      </div>
    </>

  )
}

export default TicketList