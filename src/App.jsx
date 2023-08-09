import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  useEffect(()=>{

    setCounter(oldState => {
      const newState = oldState+1;
      console.log(oldState, 'oldState', newState, 'newState');
      return newState;
    });
    console.log(counter, 'counter');
  },[]);
  
  return (
    counter < 2 ? 
    <div className="App">
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div> :
    'loader'
  );
}

export default App;
