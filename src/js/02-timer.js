import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const flatpickr = require("flatpickr");

const btnStart = document.querySelector("button[data-start]");
btnStart.addEventListener("click", handlerStart);

function handlerStart(){
    
    btnStart.setAttribute('disabled', '');
}



flatpickr("#datetime-picker",
{
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  });
