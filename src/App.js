import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import CustomNavbar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <CustomNavbar/>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
       <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
