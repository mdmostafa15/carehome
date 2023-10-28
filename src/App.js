import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Footer from './components/Footer.js';


function App() {
  return (
    <>
    <Header />
    <Navbar />
    
    <Outlet />
    
    <Footer />
    </>
  );
}

export default App;
