import * as React from "react";
import { Link, BrowserRouter, Routes, Route  } from "react-router-dom";
import userAuth from "./apps/userAuth";

import styled from 'styled-components';

import Loading from "./components/Loading";
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from "./components/Common/Home";
import Events from "./components/Common/Event";
import WatchOnline from "./components/Common/WatchOnline";
import Ticket from "./components/Common/Ticket";
import AboutUs from "./components/Common/AboutUs";
import Landing from "./components/Common/Landing";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import TicketList from "./components/User/ticketList";

import NavBarRes from "./components/Common/NavbarRes";

import LoginAdmin from "./components/admin/Login_Admin";
import LandingAdmin from "./components/admin/Landing_Admin";
import EventOnline from "./components/Common/EventOnline";
import EventOffline from "./components/Common/EventOffline";




function App() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    userAuth();
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);


  if (loading) {
    return <Loading />;
  }

  return (
    <><Container>
      <NavBarRes />
      <ContentSection>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<Landing />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/watchOnline" element={<WatchOnline />} />
            <Route path="/Ticket" element={<Ticket />} />
            <Route path="/AboutUs" element={<Landing />} />
            <Route path="/MyTicket" element={<TicketList />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Register" element={<SignUp />} />
            <Route path="/Admin" element={<LoginAdmin />} />
            {/* event with event code in params */}
            <Route path="/Events/offline/:eventCode" element={<EventOffline/>} />
            <Route path="/Events/online/:eventCode" element={<EventOnline />} />
            <Route path="/Admin/Landing" element={<LandingAdmin />} />
            <Route path="*" element={<h1 className="text-tigetgold text-8xl py-16">404: Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ContentSection>

    </Container><Footer /></>
  );
}
export default App;


const Container = styled.div`
  background-color: #131313;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: between;
  padding: 20px 20px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

//hide scrollbar all browsers
const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;


