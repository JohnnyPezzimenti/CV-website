import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'

function App() {
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
