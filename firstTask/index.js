const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

 const time = document.querySelector('[data-testid="currentUTCTime"]');

const timeNow = `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getSeconds()}` 

time.innerHTML = timeNow; 

day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});
