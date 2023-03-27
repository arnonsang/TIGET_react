// get https://tiget.bysamnorr.proj.iamickdev.com/apis/getEvent/tiget1596

function getEventData() {
  return fetch("https://tiget.bysamnorr.proj.iamickdev.com/apis/getEvent/tiget1596")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error getting data: ", err);
    });
}

//get https://tiget.bysamnorr.proj.iamickdev.com/apis/tigetTicketData/tiget1596

function getTicketData() {
  return fetch("https://tiget.bysamnorr.proj.iamickdev.com/apis/tigetTicketData/tiget1596")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error getting data: ", err);
    });
}

// get https://oauth.iamickdev.com/admin/users

function getUserData() {
  const token = localStorage.getItem('adminToken');
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'}
  };
  return fetch("https://oauth.iamickdev.com/admin/users", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("Error getting data: ", err);
    });
}

module.exports = { getEventData, getTicketData, getUserData };