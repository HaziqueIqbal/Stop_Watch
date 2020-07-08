// declear and assign
var hour = 0;
var minuites = 0;
var seconds = 0;
var milliSeconds = 0;
var disStart, disStop, disReset;

//get
var h = document.getElementById("hour");
var m = document.getElementById("mins");
var s = document.getElementById("secs");
var ms = document.getElementById("milli_sec");
var disable;
//counter
function counter() {
    milliSeconds++;
    ms.innerHTML = milliSeconds;

    if (milliSeconds / 100 === 1) {
        milliSeconds = 0;
        seconds++;
        s.innerHTML = seconds;
        if (seconds / 60 === 1) {
            minuites++;
            m.innerHTML = minuites;
            if (minuites / 60 === 1) {
                minuites = 0;
                hour++;
                h.innerHTML = hour;
            }
        }
    }
    if (milliSeconds < 10) {
        ms.innerHTML = "0" + milliSeconds;
    }
    else if (seconds < 10) {
        s.innerHTML = "0" + seconds
    }
    else if (minuites < 10) {
        m.innerHTML = "0" + minuites;
    }
    else if (hour < 10) {
        h.innerHTML = "0" + hour;
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
