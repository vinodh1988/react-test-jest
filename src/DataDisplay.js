import App from "./App"
import { AppData, asyncUserProvider } from "./DataStore/Store"
import {useState} from 'react';

const DataDisplay=()=>{
    let [name,setName]=useState(AppData.userdata.name)
    let [city,setCity]=useState(AppData.userdata.city)
    const randomUser=async ()=>{
        
         let user=  await asyncUserProvider();
         
         setName(user.name)
         setCity(user.city)
    }
    return(
        <div style={{border:"2px solid green",padding: "5px",backgroundColor: 'darkgreen'}}>
            <h3>Username:{name}</h3>
            <h3>City:{city}</h3>
            <button onClick={randomUser}>Load Random User</button>
        </div>
    )

}

export default DataDisplay;