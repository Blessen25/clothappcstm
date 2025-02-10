import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/home/home.tsx';
import Header from './components/header/header.tsx';
import Homefrontband from './components/headerbandsale.tsx';

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
          </>
        }/>
        </Routes>
      </Router>
    </>
  )
}

export default App