import SignUpForm from './SignUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Main from './components/Main';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TableOfFood from './components/TableOfFood';



function App() {
  return (
    <> 
    <Navbar/>
    {/* <HeroSection/> */}
    <Main/>
    {/* <TableOfFood/> */}
    <Footer/>
    {/* <SignUpForm/> */}
    </>
   
  );
}

export default App;
