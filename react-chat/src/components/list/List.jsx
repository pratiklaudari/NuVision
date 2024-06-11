import './list.css'
import './chatList/Chatlist'
import './userInfo/Userinfo'	
import Userinfo from './userInfo/Userinfo'
import Chatlist from './chatList/Chatlist'
const list = () => {

    return (
        <div className='list'>
        <Userinfo></Userinfo>
        <h2>Doctors</h2>
        <Chatlist></Chatlist>
        <h2>Patients</h2>
        <Chatlist></Chatlist>
        </div>)
}
export default list