
export default function adminAuth(redirect) {
    if(!redirect) redirect = '#';
    console.log("Authenticating Admin... => ", localStorage.getItem('adminToken') ? "true" : "false");
    const token = localStorage.getItem('adminToken');
    if(token){
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'}
        };
        fetch('https://oauth.iamickdev.com/admin/auth', requestOptions)
            .then(response => response.json())
            .then(data => {
                const { status, message , decoded  } = data;
                if(data.status === 'ok'){
                    console.log(`Auth status => ${status} : ${message} => Username: ${decoded.username}`);
                    localStorage.setItem('admin', decoded.username);
                    localStorage.setItem('adminLoggedIn', true);
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('username', "[Admin] "+decoded.username);
                    console.log("Redirecting to => ", redirect);
                    if(redirect !== '#') window.location.href = "/Admin"+redirect;
                    return true;
                } else {
                    console.log(`Auth status => ${status} : ${message}`);
                    localStorage.removeItem('adminToken');
                    localStorage.removeItem('admin');
                    localStorage.setItem('adminLoggedIn', false);
                    return false;
                }
            });
    }else{
        return false;
    }
}