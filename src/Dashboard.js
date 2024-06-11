import Dashnavbar from "./components/Dashnavbar";
import Dashlist from "./components/Dashlist";
import Dashpost from "./components/Dashpost";
import './Dashboard.css'
import Dashchat from "./components/Dashchat";



function Dashboard() {
  return (
              <div> 

              <Dashnavbar/>
              <div className="boardcontainer">
                <Dashlist/>
                <Dashpost/>
                <Dashchat/>
              </div>
              

              </div>

  )
}

export default Dashboard
