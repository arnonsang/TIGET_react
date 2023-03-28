// get https://tiget.bysamnorr.proj.iamickdev.com/apis/getEvent/tiget1596

const getOptions = {
  method: 'GET',
  headers: { 
  'Content-Type': 'application/json', 
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'}
};

async function getEventData() {
  return await fetch("https://tiget.bysamnorr.proj.iamickdev.com/apis/getEvent/tiget1596", getOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error getting data: ", err);
    });
}

//get https://tiget.bysamnorr.proj.iamickdev.com/apis/tigetTicketData/tiget1596

async function getTicketData() {
  return await fetch("https://tiget.bysamnorr.proj.iamickdev.com/apis/tigetTicketData/tiget1596", getOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error getting data: ", err);
    });
}

// get https://oauth.iamickdev.com/admin/users

async function getUserData() {
  const token = localStorage.getItem('adminToken');
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'}
  };
  return await fetch("https://oauth.iamickdev.com/admin/users", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error getting data: ", err);
    });
}

module.exports = { getEventData, getTicketData, getUserData };