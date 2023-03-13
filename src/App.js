import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import Events from "./components/Event";
import WatchOnline from "./components/WatchOnline";
import Ticket from "./components/Ticket";
import AboutUs from "./components/AboutUs";

const Container = styled.div`
  background-color: #131313;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: between;

`;


function App() {
  return (
    < >
    <Container>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/watchOnline" element={<WatchOnline />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </Container>
    </>
  );
}
export default App;
