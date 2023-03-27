import * as React from 'react';
import adminAuth from '../../apps/adminAuth';

export default function LoginAdmin() {
    const [isLoding, setIsLoading] = React.useState(false);
    //checkAuth here
    const form = React.useRef(null)
    React.useEffect(() => {
    const isLogged = adminAuth("/Landing");
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
    if(data.get('userName') === '' || data.get('password') === ''){
        alert('Please fill in all the fields.');
        return;
    }
    setIsLoading(true);
     let requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username: data.get('userName'), password: data.get('password') })
     };
     if(data.get('rememberMe') === 'true'){
         requestOptions = {
             method: 'POST',
             headers: { 'Content-Type': 'application/json', 
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
              
             },
             body: JSON.stringify({ username: data.get('userName'), password: data.get('password'), keepMeSignedIn:true })
         };
     }
     fetch('https://oauth.iamickdev.com/admin/login', requestOptions)
         .then(response => response.json())
         .then(data => {
             console.log(data)
             if(data.status === 'ok'){
                 console.log("Login successful");
                 localStorage.setItem('adminToken', data.token);
                 adminAuth(`/Landing`);
                 setIsLoading(false);
            
             } else {
                 console.log("Unable to login, please try again.");
                 setIsLoading(false);
                 alert(data.message);
             }
         })
   };
  const outOfService = (feature) => {
    alert(`This ${feature} feature is currently on development, please try another way.`);
  }
  if(isLoding){
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-tigetgold"></div>
      </div>
    )
  }


  return (
    <section className="h-full overflow-y-scroll overflow-x-auto">
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
        <h1 className='text-tigetgold text-2xl'>Admin Login</h1><br />
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
                Keep login
              </label>
            </div>
            <a
              href="#!"
              className="text-tigetgold transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Are you user?</a>
          </div>

          <button
            type="submit"
            className="border border-tigetgold inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-tigetgold shadow-tigetgold transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-tigetgold focus:bg-primary-600 focus:shadow-tigetgold focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-tigetgold"
            >
            Sign in
          </button>
          
        </form>
      </div>
    </div>
  </div>
</section>

  );
}
