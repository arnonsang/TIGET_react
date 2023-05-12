
const axios = require('axios')
const app = process.env.REACT_APP_APP_SERVER;

async function createEvent(data){
    try{
        let EventData = {};
        if(!data.EventType) return console.log("Event type not specified");
        if(data.EventType.toLowerCase() === "offline"){
            EventData = {
                EventType: data.EventType,
                EventName: data.EventName,
                EventShortName: data.EventShortName,
                EventDate: data.EventDate,
                EventTime: data.EventTime,
                EventDescription: data.EventDescription,
                EventPoster: data.EventPoster,
                EventCoordinators: data.EventCoordinators,
                EventAvailableZone: data.EventAvailableZone,
                EventAvailableSeats: data.EventAvailableSeats
            }
        } else if(data.EventType.toLowerCase() === "online"){
            EventData = {
                EventType: data.EventType,
                EventName: data.EventName,
                EventShortName: data.EventShortName,
                EventDate: data.EventDate,
                EventTime: data.EventTime,
                EventDescription: data.EventDescription,
                EventPoster: data.EventPoster,
                EventCoordinators: data.EventCoordinators,
                EventAvailable: data.EventAvailable,
                EventLiveStreaming: data.EventLiveStreaming
            }
        } else {
            console.log("Invalid event type");
            return;
        }
        const response = await axios.post(app+"/createEvent", EventData)
        if(response.data.status === "ok"){
            console.log(`Event created successfully => Event Code: ${response.data.eventcode}`);
        } else {
            console.log(`Error when creating event => ${response.data.message}`);
        }
    }
    catch(error){
        console.error(error)
    }
}

module.exports = createEvent;

const mockupData = {
    EventType: "Offline",
    EventName: "Sample Event 3",
    EventShortName: "SAMPLEEVENT3",
    EventDate: "2021-07-31",
    EventTime: "12:00:00",
    EventDescription: "This is a sample event",
    EventPoster: "https://i.imgur.com/3QXm2oF.jpg",
    EventCoordinators: "Sample Coordinator 1, Sample Coordinator 2",
    EventAvailableZone: "[A, B, C ,D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]",
    EventAvailableSeats: [{
        "Zone":"A",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"B",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"C",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"D",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"E",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"F",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"G",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },{
        "Zone":"H",
        "Seat":"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    }]
}

createEvent(mockupData)