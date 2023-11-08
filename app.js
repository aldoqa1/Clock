const darkmode = document.querySelector("#darkmode");
const body = document.body;
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const hourEl = document.querySelector(".hour");
const days = ["Sunday / ", "Monday / ", "Tuesday / ", "Wednesday / ", "Thursday / ", "Friday / ", "Saturday / "];
const months = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
const monthEl = document.querySelector(".month");
const dayEl = document.querySelector(".day");
const clockScreen = document.querySelector(".AM-PM");

let current = new Date();
let hour1 = current.getHours();
let minute1 = current.getMinutes();
let second1 = current.getSeconds();

let hourInicial = (hour1+minute1/60)*30+180;
let minuteInicial = minute1*6+180;
let secondInicial = second1*6+180;

secondEl.style.transform = `rotate(${secondInicial}deg)`;
minuteEl.style.transform = `rotate(${minuteInicial}deg)`;
hourEl.style.transform = `rotate(${hourInicial}deg)`;

setInterval(updateTime, 1000);

darkmode.addEventListener("click", ()=>{
    body.classList.toggle("darkactive");
});

function updateTime(){
    let current = new Date();
    let hour = current.getHours();
    let minute = current.getMinutes();
    let second  = current.getSeconds();
    let day  = current.getDay();
    let month  = current.getMonth();

    updateClock(hour, minute, second, day, month);

}

function updateClock(hour, minute, second, day, month){
    if(hour1!=hour){
        hourEl.style.transform = `rotate(${hourInicial}deg)`;
        hourInicial+= 30;
        console.log(hourInicial)
        hour1=hour
     }
    if(minute1!=minute){
        minuteInicial+= 6;
        minuteEl.style.transform = `rotate(${minuteInicial}deg)`;
        console.log(minuteInicial)
        minute1=minute
       
        hourInicial+= 6/60;
        hourEl.style.transform = `rotate(${hourInicial}deg)`;
        console.log(hourInicial)
     


    }

    if(second1!=second){
        secondInicial+= 6;
        secondEl.style.transform = `rotate(${secondInicial}deg)`;
        
        console.log(secondInicial)
        second1 = second
        
    }
    
    
    dayEl.innerText = days[day];
    monthEl.innerText = months[month];
    
    if(hour>12){
        hour = hour-12;
        clockScreen.innerText = `${hour}:${minute} PM`;
    }else{
        clockScreen.innerText = `${hour}:${minute} AM`;
    }
    
}