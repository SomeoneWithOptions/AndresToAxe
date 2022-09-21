function tooLong(){
const fiveYears = new Date('Aug 02, 2026 00:00:00').getTime();
const currentDate = new Date().getTime();
const gap = fiveYears - currentDate ;

const seconds = 1000 ; 
const minutes = seconds *60;
const hours = minutes * 60 ;
const days =  hours * 24 ;
const years = days * 365 ;


console.log(fiveYears)
console.log(currentDate)

document.getElementById('years').innerText = Math.floor(gap/years); 
document.getElementById('days').innerText = Math.floor((gap % years) / days); 
document.getElementById('hours').innerText = Math.floor((gap % days)/ hours); 
document.getElementById('minutes').innerText = Math.floor((gap % hours) / minutes); 
document.getElementById('seconds').innerText = Math.floor((gap % minutes) / seconds); 


}

setInterval(() => tooLong(),1000);
