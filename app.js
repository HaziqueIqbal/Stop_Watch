// declear and assign
let hour = 0;
let minuites = 0;
let seconds = 0;
let milliSeconds = 0;
let disStart, disStop, disReset;


let h = document.getElementById("hour");
let m = document.getElementById("mins");
let s = document.getElementById("secs");
let ms = document.getElementById("milli_sec");
let disable;
//counter
function counter() {
    milliSeconds++;
    (milliSeconds < 10) ? ms.innerHTML = "0" + milliSeconds : ms.innerHTML= milliSeconds;
    if (milliSeconds / 100 === 1) {
        milliSeconds = 0;
        seconds++;
        (seconds < 10) ? s.innerHTML = "0" + seconds : s.innerHTML= seconds;
    }
    else if (seconds / 60 === 1) {
        seconds = 0;
        minuites++;
        if (minuites <= 9) {
            m.innerHTML = "0" + minuites;
        }
        else {
            m.innerHTML = minuites;
        }
    }
    else if (minuites / 60 === 1) {
        minuites = 0;
        hour++;
        if (hour < 10) {
            h.innerHTML = "0" + hour;
        }
        else {
            h.innerHTML = hour;
        }
    }
}


function start() {
    editInterval = setInterval(counter, 10);
    disStart = document.getElementById("Start").disabled = true;
    disStop = document.getElementById("Stop").disabled = false;
    disReset = document.getElementById("clr").disabled = false;
}

function stop() {
    clearInterval(editInterval);
    disStop = document.getElementById("Stop").disabled = true;
    disStart = document.getElementById("Start").disabled = false;
    disReset = document.getElementById("clr").disabled = false;
}

function clr() {
    disReset = document.getElementById("clr").disabled = true;
    disStop = document.getElementById("Stop").disabled = false;
    disStart = document.getElementById("Start").disabled = false;
    clearInterval(editInterval);
    milliSeconds = 0;
    seconds = 0;
    hour = 0;
    minuites = 0;
    m.innerHTML = "0" + minuites;
    s.innerHTML = "0" + seconds;
    h.innerHTML = "0" + hour;
    ms.innerHTML = "0" + milliSeconds;
}
