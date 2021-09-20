import axios from "axios";
import { dataProvider } from "./DataStore/Store";

describe("Asynchronous Tests", ()=>{
test("Data Provider must work",(done)=>{
   dataProvider(function(data){
        expect(data).toBe("hello!!!");
        done();
   })
});


test("rest api must be called", ()=>{
   return axios.get("http://localhost:5000/students").then(
        (response)=> {console.log(response.data)
          expect(response.data.length).toBe(3)
        }
    ).catch(
        (error)=>console.log(error)
    )    
    })
});

test("rest api must be called this time too",async ()=>{
    let response = await axios.get("http://localhost:5000/students");
    expect(response.data.length).toBe(3)
})
