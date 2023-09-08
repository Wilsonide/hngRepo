let myTime = document.getElementById("time");
let pday = document.getElementById("day");
const date = new Date()
/* const utcTime = date.UTC(); */
const dayFormat = new Intl.DateTimeFormat('en-US',{weekday:'long'})
/* console.log("utc in milliseconds", utcTime); */
const me = dayFormat.format(date);
console.log(me);
pday.textContent= me;
myTime.textContent = Date.now();