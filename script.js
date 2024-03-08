let timer;
timeLeft = parseInt(document.getElementById("work-session").value);
let isRunning = false;

// this is just to start the timer if it is not running and not to update it or something else
function startTimer(){
    if(!isRunning){
        
        isRunning = true;
        timer = setInterval(updateTimer,1000);
       
    };
  
}

// this is just to pause the timer when it is running
function pauseTimer(){
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
        document.getElementById('pause').innerText = "resume";
    }
    else if(!isRunning){
        startTimer();
        document.getElementById("pause").innerText = "pause";
    }
   
    // updateTimerDisplay();
}

// this is to reset the timer, reset the timer right to the start again, where timeLeft = 1500;
function resetTimer(){
    isRunning = false;
    timeLeft = parseInt(document.getElementById("work-session").value);
    clearInterval(timer);
    updateTimerDisplay();
}

// pomodoro timers have a break session and work session here we will switch between break session and work session 
function takeBreak(){
    timeLeft = parseInt(document.getElementById("break-length").value);
    updateTimer();
    updateTimerDisplay();  
}


// this means here we will write the logic for how 44 secs becomes 43 secs and 43 becomes 42; 
function updateTimer(){
    if(timeLeft>0){
        timeLeft--;
        updateTimerDisplay();
    }
   
}


// here we will write the logic for updating the display as the timer gets updated,
function updateTimerDisplay(){
    const minutes = Math.floor(timeLeft/60);
    const seconds = Math.floor(timeLeft%60);
    const display = `${minutes.toString().padStart(2,"00")}:${seconds.toString().padStart(2,"00")}`;
    document.getElementById("timer").innerText = display;
}

// buttons
// here we will write the logic to execute the above functions when the buttons created in the html file are clicked
document.getElementById("work").addEventListener("click",startTimer);
document.getElementById("pause").addEventListener("click",pauseTimer);
document.getElementById("reset").addEventListener("click",resetTimer);
document.getElementById("break").addEventListener("click",takeBreak);

updateTimerDisplay();
