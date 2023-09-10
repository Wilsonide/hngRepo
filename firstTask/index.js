const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');


function updateUTCTime() {
    const currentUTCTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}


function updateUTCTimeEverySecond() {
    setInterval(updateUTCTime, 1000);
}




day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});

window.addEventListener('load', () => {
    updateUTCTimeEverySecond();
    day.innerHTML = new Date().toLocaleString('en-US', {weekday: 'long'});
});
