import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from  "./components/Header";
import AboutMe from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
   <Navbar/>
   <Header />
   <AboutMe/>
   <Portfolio />
   <Contacts />
   </>
  );
}

export default App;
