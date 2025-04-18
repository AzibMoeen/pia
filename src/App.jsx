import './App.css';
import Navbar from './components/Navbar';
import FlightBookingPage from './components/Forms';
import OurServices from './components/Services';
import BestOffers from './components/BestOffers';
import ExecutiveCorporateProgram from './components/Executiveprogram';
import News from './components/News';
import Footer from './components/Footer';
import RotatingBanner from './components/Banner';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router> 
      <RotatingBanner />
      <Navbar />
      <FlightBookingPage />
      <OurServices />
      <BestOffers />
      <ExecutiveCorporateProgram />
      <News />
      <ContactForm />
      <Footer />
    </Router>
  );
}

export default App;
