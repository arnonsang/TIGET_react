
export default function userAuth(redirect) {
    if(!redirect) redirect = '#';
    console.log("Authenticating user... => ", localStorage.getItem('token') ? "true" : "false");
    const token = localStorage.getItem('token');
    if(token){
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'}
        };
        fetch('https://oauth.iamickdev.com/auth', requestOptions)
            .then(response => response.json())
            .then(res => {
                const { status, message , decoded, data  } = res;
                if(status === 'ok'){
                    const { username, email, fname, lname, role } = data;
                    const userData = { username, email, fname, lname, role };
                    console.log(`Auth status => ${status} : ${message} => Username: ${decoded.username}`);
                    localStorage.setItem('username', decoded.username);
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('userData', JSON.stringify(userData));
                    console.log("Redirecting to => ", redirect);
                    if(redirect !== '#') window.location.href = redirect;
                    return true;
                    
                } else {
                    console.log(`Auth status => ${status} : ${message}`);
                    localStorage.clear();
                    return false;
                }
            });
    }else{
        return false;
    }
}