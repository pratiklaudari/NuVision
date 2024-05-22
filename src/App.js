
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Coverpage from './components/Coverpage';
import About from './components/About';
import Therapist from './components/Therapist';
import Workflow from './components/Workflow';

function App() {
    return(
        <>
        <Router>
           <Navbar/>
           <Coverpage/>     
           <About/> 
           <Therapist/>
           <Workflow/>
        </Router>
        </>
    );
}
export default App;
