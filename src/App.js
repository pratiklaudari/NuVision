
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Coverpage from './components/Coverpage';
import About from './components/About';

function App() {
    return(
        <>
        <Router>
           <Navbar/>
           <Coverpage/>     
           <About/> 
        </Router>
        </>
    );
}
export default App;
