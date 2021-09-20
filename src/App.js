import {useState} from 'react'

const App = ({title})=>{
  const [display,setDisplay]=useState(title)

  return(
       <div style={{backgroundColor: "yellow",padding :"50px"}}>
          {display}
          <button>Change Theme</button>
          <button onClick={()=>setDisplay('Title Change Happened')}>Change Title</button>
       </div>
  )
}

export default App;