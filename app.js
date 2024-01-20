
let timer;
let minutes = 0;
let seconds = 0;
let hours = 0;
let isRunning = false;

//function to start timer 
/*checks whether the value of isRunning is false. If it is, then the condition is true
and the code inside the if block will be executed. Checks if the stopwatch is currently running*/
function startStopWatch() {
    if(!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 1000);
    } else {
        isRunning = false;
        clearInterval(timer);
    }
}

//function to stop timer
function stopStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateStopwatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
     }else if(minutes === 60){
        minutes === 0;
        hours++;
     }
     updateDisplay();
    }

    function updateDisplay() {
        const display = document.getElementById('display');
        display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }