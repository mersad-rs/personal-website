import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/About' Component={About} />
          <Route path='/Contact' Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
