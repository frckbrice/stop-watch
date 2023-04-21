// to get the values of the date-time
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const secondes = document.querySelector(".seconds");
const thirds = document.querySelector(".thirds");

//to test if it work till now
/*console.log(days, hours, minutes, secondes, thirds);*/

// to get the button manager values
const start = document.querySelector("#start");
const stopw = document.querySelector("#stop");
const reset = document.querySelector("#reset");

// add eventslistening to the button manager
start.addEventListener("click", startFunction);
stopw.addEventListener("click", stopFunction);
reset.addEventListener("click", resetFunction);

// the stat of the watch
let stateOfWatch = false;

// the values used for progression time
let daysValue = 1,
  hoursValue = 00,
  minutesValue = 00,
  secondsValue = 00,
  thirdsValue = 0;
  
  // the returned value of setInterval 
let setIntervaId = 0;

// function to start timer
function startFunction() {
  setIntervaId = setInterval(function () {
    // case of the thirds decreasing
    thirdsValue ++;
    if (thirdsValue === 60) {
      thirdsValue = 0;
      secondsValue ++;
    }
    thirds.textContent = thirdsValue < 10 ? `0${thirdsValue}` : thirdsValue;
    secondes.textContent =
      secondsValue < 10 ? `0${secondsValue}` : secondsValue;

    //case of the seconds
    if (secondsValue === 60) {
      secondsValue = 00;
      minutesValue ++;
    }
    minutes.textContent = minutesValue < 10 ? `0${minutesValue}` : minutesValue;

    //case of the minutes
    if (minutesValue === 60) {
      hoursValue ++;
      minutesValue = 00;
    }
    hours.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;

    //case of the days
    if (hoursValue === 24) {
      daysValue ++;
      hoursValue = 00;
    }
    days.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;

    if (daysValue === 31) {
       days.textContent = "0" + 1;
    }
  }, 100);
}

//function to stop the timer
function stopFunction() {
  clearInterval(setIntervaId);
}

//function to reset the timer
function resetFunction() {
  thirds.textContent = 00;
  secondes.textContent = 00;
  minutes.textContent = 00;
  hours.textContent = 00;
  days.textContent = "0" + 1;
  clearInterval(setIntervaId);
}

const displayDate = document.createElement('displayDate');
displayDate.textContent = new Date();
displayDate.style.display = 'block';
displayDate.style.color = 'white';
displayDate.style.fontFamily = 'satisfy';
displayDate.style.fontSize = '20px';

