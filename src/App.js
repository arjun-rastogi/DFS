import React from 'react';
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Services from './Pages/Services';

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Profile />
      <Contact />
    </div>
        
  );
}

export default App;
