const axios = require('axios')
const app = process.env.REACT_APP_APP_SERVER;

async function getTicket(ticketcode){
    try {
        axios.get(app+"/ticket/"+ticketcode)
        .then((response) => {
            console.log(`Connection to server : ${response.data.status}`);
            if(response.data.status === "ok"){
                console.log(response.data.data);
            }else{
                console.log(`Error when getting ticket => ${response.data.message}`);
            }
        }
        )
    } catch (error) {
        console.error(error)
    }
}

module.exports = getTicket;

getTicket("OFFLINE-lKs8y")