import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate, BrowserRouter} from 'react-router-dom';
import HamburguerMenu from './components/HamburguerMenu'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutUs from './pages/AboutUs.js';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import Navbar from './components/NavBar';

 function App() {
  return (

      <Router>
        <Header></Header>
        <HamburguerMenu></HamburguerMenu>
          <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/ServicesPage" element ={<ServicesPage/>} />
          <Route path="/AboutUs" element ={<AboutUs/>} />
          <Route path="/ContactUs" element ={<ContactUs/>} />
          <Route path="*" element ={<NotFound/>} />
        </Routes>
        <Footer></Footer>
        </Router>
  );
};
export default App;