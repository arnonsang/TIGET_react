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
                  <th>EventCode</th>
                  <th>EventShortName</th>
                  <th>EventName</th>
                  <th>EventDate</th>
                  <th>EventLocation</th>
                  <th>EventDescription</th>
                  <th>EventTag</th>
                  <th>EventPoster</th>
                  <th>EventType</th>
                  <th>EventStatus</th>
              </tr>
          </thead>
          <tbody>
              {event.map((item) => {
                    return (
                        <tr key={item.EventCode}>
                            <td>{item.EventCode}</td>
                            <td>{item.EventShortName}</td>
                            <td>{item.EventName}</td>
                            <td>{item.EventDate}</td>
                            <td>{item.EventLocation}</td>
                            <td>{item.EventDescription}</td>
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