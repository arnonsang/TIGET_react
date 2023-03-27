import React from 'react'
import { getEventData } from '../../apps/getTIGET'

function ManageEvent() {
    const [event, setEvent] = React.useState([])
    React.useEffect(() => {
        getEventData().then((res) => {
            setEvent(res)
        })
    }, [])

  return (
    <><div>ManageEvent</div><table>
          <thead>
              <tr>
                  <th>EventKeyID</th>
                  <th>EventKeyName</th>
                  <th>EventTitle</th>
                  <th>EventDate</th>
                  <th>EventLocation</th>
                  <th>EventDesc</th>
                  <th>EventTag</th>
                  <th>EventPoster</th>
                  <th>EventType</th>
                  <th>EventStatus</th>
              </tr>
          </thead>
          <tbody>
              {event.map((item) => {
                    return (
                        <tr key={item.EventKeyID}>
                            <td>{item.EventKeyID}</td>
                            <td>{item.EventKeyName}</td>
                            <td>{item.EventTitle}</td>
                            <td>{item.EventDate}</td>
                            <td>{item.EventLocation}</td>
                            <td>{item.EventDesc}</td>
                            <td>{item.EventTag}</td>
                            <td>{item.EventPoster}</td>
                            <td>{item.EventType}</td>
                            <td>{item.EventStatus}</td>
                        </tr>
                    )

              })}
          </tbody>
      </table></>

  )
}

export default ManageEvent