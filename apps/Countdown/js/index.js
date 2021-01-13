var reqDate = document.getElementById("date");
var reqTime = document.getElementById("time");
let btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", e => {

    let oneMonth = 1000 * 60 * 60 * 24 * 30
    let oneDay = 1000 * 60 * 60 * 24;
    let oneHour = 1000 * 60 * 60;
    let oneMinute = 1000 * 60 ;
    
    let num = `${reqDate.value} ${reqTime.value}:00`;
    let milli = Date.parse(num)


    let days = (milli - Date.now()) / oneDay
    let hours = (((milli - Date.now()) / oneHour) - (24 * days)) + 1
    let minutes = ((milli - Date.now()) / oneMinute) / 60
    let seconds = ((milli - Date.now()) / 1000) / 60
    let mes = (milli - Date.now()) / oneMonth
    
    console.log(Math.floor(days), `${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`)

} )
    window.setInterval(()=>{
        

    },1000)