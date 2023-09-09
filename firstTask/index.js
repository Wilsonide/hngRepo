const day = document.getElementById("day);

 const time = document.getElementById("time);

const timeNow = `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}` 

time.innerHTML = timeNow; 

day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});
console.log(time);
console.log(day);
