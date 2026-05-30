import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import CustomNavbar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
        <CustomNavbar/>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
