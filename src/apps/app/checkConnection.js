const app = process.env.REACT_APP_APP_SERVER;
console.log(app);
async function checkConnection(){
    try {
        const response = await fetch(app,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            }
        })
        console.log(`Connection to server : ${response.data.status}`);
        if(response.data.status === "ok"){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = checkConnection;

// checkConnection()