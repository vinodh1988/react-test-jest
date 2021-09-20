import {useState} from 'react'

const App = ({title})=>{
  const [display,setDisplay]=useState(title)
  const [theme,setTheme]=useState('yellow')

  return(
       <div style={{backgroundColor: theme,padding :"50px"}}>
          {display}
          <button onClick={()=>setTheme('blue')}>Change Theme</button>
          <button onClick={()=>setDisplay('Title Change Happened')}>Change Title</button>
       </div>
  )
}

export default App;