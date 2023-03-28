import React from 'react'


function UserInfo() {
  return (

    //create user info banner to display fullname username email and profile picture styling with tailwind css
    <div className="flex flex-col items-center justify-center w-full h-64 bg-gray-200">
      <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-full">
        <img className="w-32 h-32 rounded-full" src="https://images.unsplash.com/photo-1556740756-7b8b9b9c5c5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="profile" />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-32">
        <h1 className="text-2xl font-bold">FullName</h1>
        <h2 className="text-xl font-bold">UserName</h2>
      </div>
    </div>


    )
}

export default UserInfo
