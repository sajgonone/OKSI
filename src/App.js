import React from 'react';
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Header/>
    <AboutUs/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
