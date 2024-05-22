
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
 

  // const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar' id='navbar'>
        <div className='navbar-container'>
            <Link to="coverpage" className="navbar-logo">
                 <img src= '/logo.png' alt ="NuVision" className="logo-image" />
            </Link>

        </div>

      <div className='navitems-container'>
       
        <ul className='nav-items'>
          {/* <a><li>Home</li> </a> */}
          <a href='#aboutus'><li> About Us</li></a>
          <a href='#services'><li>Services</li></a>
          <a href='#howitworks'> <li> How It Works</li></a>
          <a href='#pricing'><li>Pricing</li></a>
          <a href='#contactus'><li>Conatct Us</li></a>
          <a href='/register'><li>LogIn</li></a>

          <button className='btn' ><a href='/register'>Get Started</a></button>

    
          

        </ul>
      </div>
      </nav>

    </>
  )
}

export default Navbar
