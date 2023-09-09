let myTime = document.getElementById("time");
let pday = document.getElementById("day");
const date = new Date()
/* const utcTime = date.UTC(); */
const dayFormat = new Intl.DateTimeFormat('en-US',{weekday:'long'})
/* console.log("utc in milliseconds", utcTime); */
pday.textContent=  dayFormat.format(date);
myTime.textContent = Date.now();