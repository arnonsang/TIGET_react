

const app = process.env.REACT_APP_APP_SERVER;

const userAuth = require('../userAuth.js')

async function bookTicket(data){
    try {
        // const userData = await localStorage.getItem('userData');
        // if(!userData) return userAuth();
        const userData = {username:"tiget",email:"hellotiget@gmail.com",fname:"tiget",lname:"admin",role:"user"};
        const TicketData = {
            EventCode: data.EventCode,
            TicketOwnerData: userData,
            TicketZone: data.TicketZone,
            TicketSeat: data.TicketSeat,
            TicketType: data.TicketType,
            TicketPrice: data.TicketPrice
        }
        fetch(app+"/bookTicket", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'},
            body: JSON.stringify(TicketData)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Ticket booked status => ", data.status);
            return data;
        })
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = bookTicket;

// const mockupData = {
//     EventCode: "SAMPLEEVENT1",
//     TicketZone: "A",
//     TicketSeat: "2",
//     TicketType: "VIP",
//     TicketPrice: 100
// }

// bookTicket(mockupData)