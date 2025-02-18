import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/home/home.tsx';
import Header from './components/header/header.tsx';
import Homefrontband from './components/headerbandsale.tsx';
import { Footer } from './components/footer/footer.tsx';

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
            <Footer />
          </>
        } />
        </Routes>
      </Router>
    </>
  )
}

export default App