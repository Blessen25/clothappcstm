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
import { MenCollections } from './screens/collection/collections.tsx';
import { Footer_Collection } from './components/footer/footer_collection.tsx';
import { BudgetFriendlyCollection, CasualwearCollection, DenimCollection, FormalwearCollection, GymCollection, KidscollectionComp, PartyWearCollection, PlusSizeCollection, StreetwearCollection, WomencollectionComp } from './components/collectionscomp/collectionscomp.tsx';
import ProductDetailsPage from './screens/product_details/product_details.tsx';
import Coming_Soon from './components/comingsoon/comingsoon.tsx';
import Comming_Soon from './components/comingsoon/comingsoon.tsx';

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

          {/* Collecions Route */}

          <Route path='/collection/men' element={
            <>
              <Header />
              <MenCollections />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/women' element={
            <>
              <Header />
              <WomencollectionComp />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/kids' element={
            <>
              <Header />
              <KidscollectionComp />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/streetware' element={
            <>
              <Header />
              <StreetwearCollection />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/plussize' element={
            <>
              <Header />
              <PlusSizeCollection />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/budgetfriendly' element={

            <>
              <Header />
              <BudgetFriendlyCollection />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/denim' element={

            <>
              <Header />
              <DenimCollection />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/casualwear' element={

            <>
              <Header />
              <CasualwearCollection />
              <Footer_Collection />
            </>
          } />

          <Route path='/collection/formalwear' element={

            <>
              <Header />
              <FormalwearCollection />
              <Footer_Collection />
            </>
          } />
          <Route path='/collection/partywear' element={

            <>
              <Header />
              <PartyWearCollection />
              <Footer_Collection />
            </>
          } />
          <Route path='/collection/gymwear' element={

            <>
              <Header />
              <GymCollection />
              <Footer_Collection />
            </>
          } />

          <Route path='/productdetailspage' element={
            <>
              <Header />
              <ProductDetailsPage />
              <Footer_Collection />
            </>
          } />
          <Route path='/comingsoon' element={
            <>
              <Header />
              <Comming_Soon />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App