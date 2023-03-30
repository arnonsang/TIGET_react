import * as React from 'react';
import userAuth from '../../apps/userAuth';

export default function SignUp() {
    //checkAuth here
    const [isLoading, setIsLoading] = React.useState(false);
    const form = React.useRef(null)
    React.useEffect(() => {
    const isLogged = userAuth("/");
    if(isLogged){
        console.log("User is logged in");
    } else {
        console.log("User is not logged in");
    }
    }, []);

   const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(form.current);
    console.log({
        username: data.get('userName'),
        password: data.get('password'),
        keepMeSignedIn: data.get('rememberMe'),
        fname: data.get('fname'),
        lname: data.get('lname'),
        email: data.get('email'),
    });
    if(data.get('userName') === '' || data.get('password') === '' || data.get('fname') === '' || data.get('lname') === '' || data.get('email') === ''){
        alert(`Please fill in all the fields.`);
        return;
    }
    if(data.get('password') !== data.get('password2')){
        alert(`Passwords do not match.`);
        return;
    }
    setIsLoading(true);
     let requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ 
          username: data.get('userName'), 
          password: data.get('password'),
          fname: data.get('fname'),
          lname: data.get('lname'),
          email: data.get('email'),
          
        },)
     };
     if(data.get('rememberMe') === 'true'){
         requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
                        'Access-Control-Allow-Credentials': 'true'
                       },
             body: JSON.stringify({ username: data.get('userName'), password: data.get('password'), keepMeSignedIn:true })
         };
     }
     fetch('https://oauth.iamickdev.com/register', requestOptions)
         .then(response => response.json())
         .then(data => {
             console.log(data)
             if(data.status === 'ok'){
                setIsLoading(false);
                 console.log("SignUp successful");
                  alert(`SignUp successful`);
                  window.location.href = '/Login';
             } else {
                setIsLoading(false);
                 console.log("Unable to SignUp, please try again.");
                 alert(data.message);
             }
         })
   };
  const outOfService = (feature) => {
    alert(`This ${feature} feature is currently on development, please try another way.`);
  }

  if(isLoading){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-tigetgold"></div>
      </div>
    )
  }

  return (
    <section className="h-full p-2 overflow-y-scroll overflow-x-auto">
  <div className="container h-full px-6">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="imgHolder" />
      </div>
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border valid:border-none border-tigetgold focus:border-none bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="fname"
              name='fname'
              placeholder="First Name*" />

            <label
              htmlFor="fname"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold peer-data-[te-input-state-active]:text-red-500"
              >First Name*
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border valid:border-none border-tigetgold focus:border-none bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="lname"
              name='lname'
              placeholder="Last Name*" />

            <label
              htmlFor="lname"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Last Name*
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border valid:border-none border-tigetgold focus:border-none bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="email"
              name='email'
              placeholder="Email*" />

            <label
              htmlFor="email"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Email*
            </label>
          </div>



          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border valid:border-none border-tigetgold focus:border-none bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="userName"
              name='userName'
              placeholder="Username*" />

            <label
              htmlFor="userName"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Username*
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border valid:border-none border-tigetgold bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="password"
              name='password'
              placeholder="Password*" />
            <label
              htmlFor="password"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute  top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Password*
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border valid:border-none border-tigetgold bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="password2"
              name='password2'
              placeholder="Confirm Password*" />
            <label
              htmlFor="password2"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute  top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Confirm Password*
            </label>
          </div>

          <div className="mb-6 flex items-center justify-between">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              {" "}
            </div>
            <a
              href="/Login"
              className="text-tigetgold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Already have an account? Sign in!
              </a>
            
    
          </div>

          <button
            type="submit"
            className="border border-tigetgold inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-tigetgold shadow-tigetgold transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-tigetgold focus:bg-primary-600 focus:shadow-tigetgold focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-tigetgold"
            >
            Sign Up
          </button>

          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-tigetgold after:mt-0.5 after:flex-1 after:border-t after:border-tigetgold">
            <p
              className="mx-4 mb-0 text-center font-semibold dark:text-tigetgold">
              OR
            </p>
          </div>

          <a
            className="mb-3 border border-tigetgold flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-tigetgold shadow-tigetgold transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-tigetgold focus:bg-primary-600 focus:shadow-tigetgold focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-tigetgold"
            href="#!"
            role="button"
            onClick={() => outOfService("Facebook Login")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            
            Continue with Facebook
          </a>
          <a
            className="mb-3 border border-tigetgold flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-tigetgold shadow-tigetgold transition duration-150 ease-in-out hover:shadow-tigetgold focus:bg-info-600 focus:shadow-tigetgold focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-tigetgold"
            href="#!"
            role="button"
            onClick={() => outOfService("Twitter Login")}>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            Continue with Twitter
          </a>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};