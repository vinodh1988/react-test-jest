export const AppData ={
    appname : "First React App",
    people : ["George","Roger","Vinscent","Peter"],
    context: "nothing yet",
    userdata:{name:"Krishna", city:"Mumbai"}
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

export function randomUserProvider(){
    return {name:"Peter",city:"Chennai"}
}

export function asyncUserProvider(){
    return new Promise(
      (resolve,reject)=>{
        setTimeout(() =>resolve(randomUserProvider()),500)
      }
    )
}