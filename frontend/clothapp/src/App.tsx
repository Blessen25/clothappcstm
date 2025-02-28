import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/home/home.tsx';
import Header from './components/header/header.tsx';
import Homefrontband from './components/headerbandsale.tsx';
import { Footer } from './components/footer/footer.tsx';
import AboutusPage from './screens/about/about.tsx';
import ContactPage from './screens/contact/contact.tsx';
import CollectionScreen from './screens/collection/collection.tsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Homefrontband />
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path='/aboutus' element={
            <>
              <Header />
              <AboutusPage />
              <Footer />
            </>
          } />
          <Route path='/contact' element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          } />

          <Route path='/collection' element={
            <>
              <Header />
              <CollectionScreen />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App