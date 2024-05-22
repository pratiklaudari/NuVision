
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Coverpage from './components/Coverpage';
import Services from './components/Services';
// import About from './components/About';
import Therapist from './components/Therapist';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Comparision from './components/Comparision';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';

function App() {
    return(
        <>
        <Router>
           <Navbar/>
           <Coverpage/> 
           <Aboutus/>  
           <Services/>  
           {/* <About/>  */}
           <Therapist/>
          <Comparision/>
           <Workflow/>
          <Price/>
          <Footer/>
        </Router>
        </>
    );
}
export default App;
