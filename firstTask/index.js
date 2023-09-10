const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');

const time = document.querySelector('[data-testid="currentUTCTime"]')

time.innerHTML = setInterval(() => Date.now(),1000)





day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});

