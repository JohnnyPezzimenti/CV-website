import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import React, { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setCounter(oldState => oldState + 1);
      setIsLoading(false);
    }, 2000);
  },[]);

  if (isLoading) {
    return ' l o a d i n g . . . ';
  }
  
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
