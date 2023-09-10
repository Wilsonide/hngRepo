const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

const time = document.querySelector('[data-testid="currentUTCTime"]');

const myTime = setInterval(function(){
Date.now()},1000)

time.innerHTML = myTime





day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});

