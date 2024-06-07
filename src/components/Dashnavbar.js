import React from 'react'
import "./Dashnavbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';



const Dashnavbar = () => {

  return (
    <div className='dashnavbarContainer'>
        <div className="dashnavbarLeft">
          
          <img src='\logo.png' alt='navlogo' className='dashnav-img'/>
        </div>

        <div className="dashnavbarCenter">
          <div className="searchbox">
            <SearchIcon className='searchicon'/>

            <input type="text" placeholder="Search" className="searchinput" />
          </div>
        </div>

        <div className="dashnavbarRight">

          <div className="dashnavbarIcons">
            <div className="dashnavbariconItem">
              <PersonIcon />
              <span className="dashnavbariconBadge">1</span>
            </div>

            <div className="dashnavbariconItem">
              <MessageIcon />
              <span className="dashnavbariconBadge">2</span>
            </div>

            <div className="dashnavbariconItem">
              <NotificationsIcon />
              <span className="dashnavbariconBadge">3</span>
            </div>
          </div>
  
           <Link to="/profile"> <img src="\mon-and-child.png" alt="" /> </Link>

           <button className='dashnav-button'>Upgrade now</button>
        </div>

    </div>
  )
}

export default Dashnavbar;