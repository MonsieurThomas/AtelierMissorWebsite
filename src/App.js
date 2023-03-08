import './App.css';
// import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { CollectionPage } from './pages/Collections/CollectionPage';
import { OurHistory } from './pages/Ourhistory/OurHistory';
import { ProductDetails } from './pages/Product/ProductDetails';
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './pages/Cart/Cart';
import { Ecrits } from './pages/Ecrits/Ecrits';
import { StatueUnique } from './pages/StatueUnique/StatueUnique';
import { Contacts } from './pages/Contacts/Contacts';
import { Gallery } from './pages/Gallery/Gallery';
import { Jeanne } from './components/Articles/Jeanne';
import { MarcAurele } from './components/Articles/MarcAurele';
import { Guillaumet } from './components/Articles/Guillaumet';
import { SaintExupery } from './components/Articles/SaintExupery';
import ScrollToTop from './ScrollToTop';

function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/collection" element={<CollectionPage />}/>
            <Route path='/ourHistory' element={<OurHistory />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/productDetail' element={<ProductDetails />}/>
            <Route path='/statueUnique' element={<StatueUnique />}/>
            <Route path='/ecrits' element={<Ecrits />}/>
            <Route path='/contacts' element={<Contacts />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/jeanne' element={<Jeanne />}/>
            <Route path='/marcAurele' element={<MarcAurele />}/>
            <Route path='/guillaumet' element={<Guillaumet />}/>
            <Route path='/saintExupery' element={<SaintExupery />}/>
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
