
import { Axios } from 'axios';
const app = process.env.REACT_APP_APP_SERVER;

async function getEvent(eventcode){
    try {
        if(!eventcode){
            const response = await fetch(app+"/getEvent")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log("Getting event => ", data.status);
                return data;
            })
            .catch((err) => {
                return console.log("Error getting data: ", err);
            }
            );
        }else{
            const response = await fetch(app+"/getEvent/"+eventcode)
            .then((response) => response.json())
            .then((data) => {
                console.log("Getting event => ", data.status);
                return data;
            })
            .catch((err) => {
                return console.log("Error getting data: ", err);
            }
            );
        }  
    } catch (error) {
        console.error(error)
    }
}

export default getEvent;
