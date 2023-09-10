const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

 const time = document.querySelector('[data-testid="currentUTCTime"]');

const timeNow = Date.now();
time.innerHTML = timeNow; 
setInterval(timeNow,1000);

day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});
