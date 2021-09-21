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
  const users=[
     {name:"Peter",city:"Chennai"},
     {name:"Roger",city:"Jaipur"},
     {name:"Mukul",city:"Nagpur"},
     {name:"Mahesh",city:"Mumbai"},
     {name:"Rakesh",city:"Chennai"}
  ]
    return users[Math.round(Math.random()*4)]
}

export const asyncUserProvider=() => {
    return new Promise(
      (resolve,reject)=>{
        setTimeout(() =>resolve(randomUserProvider()),500)
      }
    )
}