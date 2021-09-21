import {useState} from 'react'
import { AppData } from './DataStore/Store'

const App = ({title})=>{
  const [display,setDisplay]=useState(title)
  const [theme,setTheme]=useState('yellow')

  return(
       <div style={{backgroundColor: theme,padding :"50px"}} id="home">
          {display}
          <h3>People</h3>
          <ul>
             {AppData.people.map(x=><li key={x}>{x}</li>)}
          </ul>
          <button onClick={()=>setTheme('blue')}>Change Theme</button>
          <button onClick={()=>setDisplay('Title Change Happened')}>Change Title</button>
       </div>
  )
}

export default App;