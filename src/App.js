import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Coverpage from './components/Coverpage';
import Services from './components/Services';
import Therapist from './components/Therapist';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Comparision from './components/Comparision';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './Dashboard';
import Chatbox from './components/Chatbox';

function App() {
    return(
        <>
        <Router>
        
            <Routes>
               
                <Route path="/" element={
                        
                    <div>
                            <Navbar/>
                            <Coverpage/> 
                            <Services/>  

                            <Aboutus/>  
                            {/* <About/>  */}
                            <Therapist/>
                            <Comparision/>
                            <Workflow/>
                            <Price/>
                            <Footer/>
                
                    </div>
                } />
               
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/chatbox" element={<Chatbox/>}/>
                

            </Routes>
            
        </Router>
        </>
    );
}
export default App;