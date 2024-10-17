let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let TimeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) { // Fixes the condition to check for a non-null interval
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10); // Correct spelling
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    TimeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() { // Correct spelling
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;  // Corrected from 'hour' to 'hours'
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    TimeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
