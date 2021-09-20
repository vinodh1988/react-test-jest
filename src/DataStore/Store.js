export const AppData ={
    appname : "First React App",
    people : ["George","Roger","Vinscent","Peter"],
    context: "nothing yet"
}

export function dataProvider(p){

    setTimeout(()=>p("hello!!!"),2000)
   
 }
 
 
export function inputProcess(a){
    if(a%20==0)
      throw Error();
    else
      console.log("Data Processed")
}

export function contextProcess(input){
   AppData.context=input+" Processed";
}