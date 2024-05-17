
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
 

  // const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                 <img src= '/logo.png' alt ="NuVision" className="logo-image" />
            </Link>

        </div>

      <div className='navitems-container'>
       
        <ul className='nav-items'>
          <a><li>How It Works?</li> </a>

          <a><li>About</li></a>
          <a><li>Reviews</li></a>
          <a><li>Pricing</li></a>
          <a><li> FAQ</li></a>
          <a><li>LogIn</li></a>
          <button className='btn' >Get Started</button>

    
          

        </ul>
      </div>
      </nav>

    </>
  )
}

export default Navbar
