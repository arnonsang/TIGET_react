import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
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



function App() {
  return (
    < >
    <Container>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Landing />} />
        <Route path="/Events" element={<Landing />} />
        <Route path="/watchOnline" element={<Landing />} />
        <Route path="/Ticket" element={<Landing />} />
        <Route path="/AboutUs" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </Container>
    </>
  );
}
export default App;

const Container = styled.div`
  background-color: #131313;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: between;
  padding: 0 20px;

`;

