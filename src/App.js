import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from  "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/Aboutme";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
   <Navbar/>
   <Header />
   <AboutMe/>
   <Portfolio />
   </>
  );
}

export default App;
