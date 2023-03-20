import * as React from 'react';
import userAuth from '../../apps/userAuth';

export default function Login() {
    //checkAuth here
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
        keepMeSignedIn: data.get('rememberMe')
    });
     let requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username: data.get('userName'), password: data.get('password') })
     };
     if(data.get('rememberMe') === 'true'){
         requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ username: data.get('userName'), password: data.get('password'), keepMeSignedIn:true })
         };
     }
     fetch('http://localhost:3333/login', requestOptions)
         .then(response => response.json())
         .then(data => {
             console.log(data)
             if(data.status === 'ok'){
                 console.log("Login successful");
                 localStorage.setItem('token', data.token);
                 userAuth(`/`);
            
             } else {
                 console.log("Unable to login, please try again.");
                 alert(`Unable to login, please try again.`);
             }
         })
   };
  const outOfService = (feature) => {
    alert(`This ${feature} feature is currently on development, please try another way.`);
  }

  return (
    <section className="h-screen">
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
              className="peer block min-h-[auto]  w-full rounded border border-tigetgold valid:border-none  focus:border-none bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="userName"
              name='userName'
              placeholder="Username" />

            <label
              htmlFor="userName"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem]  peer-focus:scale-[0.8] peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] peer-focus:text-tigetgold peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Username
            </label>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full valid:border-none rounded border border-tigetgold bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-tigetgold dark:placeholder:text-tigetgold [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="password"
              name='password'
              placeholder="Password" />
            <label
              htmlFor="password"
              className="pointer-events-none peer-valid:-translate-y-[1.15rem] peer-valid:scale-[0.8] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-tigetgold dark:peer-focus:text-tigetgold"
              >Password
            </label>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0  before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-tigetgold focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-tigetgold focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-tigetgold checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                id="rememberMe"
                name='rememberMe'
                 />
              <label
                className="inline-block text-tigetgold pl-[0.15rem] hover:cursor-pointer"
                htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a
              href="#!"
              className="text-tigetgold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Forgot password?</a
            >
          </div>

          <button
            type="submit"
            className="border border-tigetgold inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-tigetgold shadow-tigetgold transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-tigetgold focus:bg-primary-600 focus:shadow-tigetgold focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-tigetgold"
            >
            Sign in
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
}
