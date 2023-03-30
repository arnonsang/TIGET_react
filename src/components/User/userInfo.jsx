import React from 'react'
import userAuth from '../../apps/userAuth';
import Loading from '../Loading';


export default function UserInfo() {
  const [userData, setUserData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      setUserData(user);
      setIsLoading(false);
    }else{
      if(!userAuth()){
        window.location.href = "/Login";
      }
    }
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  const { username, email, fname, lname } = userData;
  const fullName = `${fname.trim()} ${lname.trim()}`;
  return (
    //create user info banner to display fullname username email and profile picture styling with tailwind css
    <div className="flex flex-row items-center justify-center w-full h-64 bg-transparent border border-tigetgold">
      <div className="flex flex-col items-center justify-center w-32 h-32 m-8 bg-white rounded-full">
        <img className="w-32 h-32 rounded-full border border-tigetgold" src="https://api.lorem.space/image/face?w=150&h=150" alt="profile" />
      </div>
      <div className="flex flex-col items-left justify-center w-full h-32">
        <h1 className="text-2xl font-bold text-tigetgold">Full Name : {fullName}</h1>
        <h2 className="text-xl font-bold text-tigetgold">Username : {username}</h2>
        <h3 className="text-xl font-bold text-tigetgold">Email : {email}</h3>
      </div>
    </div>


    )
}

