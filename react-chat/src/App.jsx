import Chat from "./components/chat/Chat"
import List from "./components/list/List"

const App = () => {
  return (
    <div className='container'>
      {
        <>
          <List></List>
          <Chat></Chat>
        </>
        
      }
    </div>
  )
}

export default App