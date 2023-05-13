import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import userAuth from "../../apps/userAuth";

export default function NavBarRes() {
  const [navbar, setNavbar] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const activeLinkTextColor = (thisLink) => {
    let myLink = thisLink;
    if (thisLink === "/") {
      myLink = "/home";
    }
    const nowLink = window.location.pathname;
    if (nowLink.toLowerCase() === myLink.toLowerCase()) {
      return "text-white text-lg  font-bold border-b-2 border-white border-opacity-90 border-shadow ";
    } else {
      return "text-tigetgold";
    }
  };

  if (isLoggedIn === "true") {
    const username = localStorage.getItem("username");
    return (
      <nav className="w-screen bg-[#131313] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <h2 className="text-3xl font-bold text-tigetgold p-6 text-center">
                  TIGET
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-tigetgold rounded-md outline-none focus:border-tigetgold focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-tigetgold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-tigetgold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li
                  className={
                    "font-normal hover:text-[white] hover:font-semibold " +
                    activeLinkTextColor("/Home")
                  }
                >
                  <a href="/">Home</a>
                </li>
                <li
                  className={
                    "font-normal hover:text-[white] hover:font-semibold " +
                    activeLinkTextColor("/AboutUs")
                  }
                >
                  <a href="/AboutUs">About us</a>
                </li>
                <li
                  className={
                    "font-normal hover:text-[white] hover:font-semibold " +
                    activeLinkTextColor("/Events")
                  }
                >
                  <a href="/Events">Events</a>
                </li>
                <li
                  className={
                    "font-normal hover:text-[white] hover:font-semibold " +
                    activeLinkTextColor("/MyTicket")
                  }
                >
                  <a href="/MyTicket">My Ticket</a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 xl:hidden lg:hidden">
            <form id="SearchForm" className='md:hidden l-0'>
        <div className="flex border-tigetgold border-2 mt-12 md:mt-4 md:m rounded-full  md:w-[45rem] md:h-16 hover:border-8  mb-10">
            <input className="bg-transparent p-2 md:p-8 text-sm md:text-xl text-tigetgold text-bold w-full md:w-[45rem] md:h-16 border-none placeholder-tigetgold focus:outline-none focus:border-transparent"
            type="search" name="searchEvent" id="searchEvent" placeholder="Search your event here!" required/>

            <button type="submit">
            <div className="grid place-items-center h-full w-12 text-tigetgold mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </button>
        </div>
      </form>
      </div>
      

              <div className="mt-3 space-y-2 xl:hidden lg:hidden">
                <a
                  href="/MyTicket"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-tigetgold2 rounded-md shadow hover:bg-gray-800"
                >
                  Hi, {username}
                </a>
                <a
                  href="#!"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow  hover:bg-gray-800 hover:text-white"
                  onClick={() => {
                    const confirm = window.confirm(
                      "Are you sure you want to logout?"
                    );
                    if (!confirm) return;
                    localStorage.clear();
                    alert("Logged out!");
                    window.location.reload();
                  }}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 lg:inline-block">
            <a
              href="/MyTicket"
              className="px-4 py-2 text-white bg-tigetgold2 rounded-md shadow hover:bg-gray-800 "
            >
              Hi, {username}
            </a>
            <a
              href="#!"
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-tigetgold2 hover:text-white"
              onClick={() => {
                const confirm = window.confirm(
                  "Are you sure you want to logout?"
                );
                if (!confirm) return;
                localStorage.clear();
                alert("Logged out!");
                window.location.reload();
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </nav>
    );
  } else {
    userAuth();
  }

  return (
    <nav className="w-screen bg-[#131313] shadow">
      <div className="justify-between px-2 ml-0 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-tigetgold text-3xl font-bold p-6 text-center hidden md:block">
                TIGET
              </h2>
            </a>

            <div className="md:hidden">
              <button
                className="p-2 text-tigetgold rounded-md outline-none focus:border-tigetgold focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-tigetgold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-tigetgold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className={
                  "font-normal hover:text-[white] hover:font-semibold " +
                  activeLinkTextColor("/Home")
                }
              >
                <a href="/">Home</a>
              </li>

              <li
                className={
                  "font-normal hover:text-[white] hover:font-semibold " +
                  activeLinkTextColor("/Events")
                }
              >
                <a href="/Events">Events</a>
              </li>
              <li
                className={
                  "font-normal hover:text-[white] hover:font-semibold " +
                  activeLinkTextColor("/Ticket")
                }
              >
                <a href="/Ticket">Verify Ticket</a>
              </li>

              <li
                className={
                  "text-tigetgold font-normal hover:text-[white] hover:font-semibold " +
                  activeLinkTextColor("/watchOnline")
                }
              >
                <a href="/watchOnline">Watch Live</a>
              </li>
              <li
                className={
                  "font-normal hover:text-[white] hover:font-semibold " +
                  activeLinkTextColor("/AboutUs")
                }
              >
                <a href="/AboutUs">About us</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 xl:hidden lg:hidden">
              <form id="SearchForm" className="md:hidden l-0">
                <div className="flex border-tigetgold border-2 mt-12 md:mt-4 md:m rounded-full  md:w-[45rem] md:h-16 hover:border-8  mb-10">
                  <input
                    className="bg-transparent p-2 md:p-8 text-sm md:text-xl text-tigetgold text-bold w-full md:w-[45rem] md:h-16 border-none placeholder-tigetgold focus:outline-none focus:border-transparent"
                    type="search"
                    name="searchEvent"
                    id="searchEvent"
                    placeholder="Search your event here!"
                    required
                  />

                  <button type="submit">
                    <div className="grid place-items-center h-full w-12 text-tigetgold mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-3 space-y-2 xl:hidden lg:hidden">
              <a
                href="/Login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-tigetgold2 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="/Register"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow  hover:bg-gray-800 hover:text-white"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <a
            href="/Login"
            className="px-4 py-2 text-white bg-tigetgold2 rounded-md shadow hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="/Register"
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-tigetgold2 hover:text-white"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
