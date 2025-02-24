import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/home/home.tsx';
import Header from './components/header/header.tsx';
import Homefrontband from './components/headerbandsale.tsx';
import { Footer } from './components/footer/footer.tsx';
import AboutusPage from './screens/about/about.tsx';
import ContactPage from './screens/contact/contact.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () =>{
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={
          <>
            <Homefrontband/>
            <Header/>
            <Home/>
            <Footer />
          </>
        }/>
        <Route path='/Aboutus' element={
          <>
            <Header />
            <AboutusPage />
            <Footer />
          </>
        } />
        <Route path='/Contact' element={
          <>
            <Header />
            <ContactPage />
          </>
        } />
        </Routes>
      </Router>
    </>
  )
}

export default App