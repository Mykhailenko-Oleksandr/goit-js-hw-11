import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import icon from '../img/error.svg'

const datetimePicker = document.querySelector('#datetime-picker')
const start = document.querySelector('[data-start]')
const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')

start.addEventListener('click', onStartClick)

start.disabled = true;

let userSelectedDate;
let stayMillisecondsUserDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < Date.now()) {
            return iziToast.error({
                message: "Please choose a date in the future",
                messageColor: '#fff',
                messageSize: '16',
                messageLineHeight: '24',
                backgroundColor: '#ef4040',
                iconUrl: icon,
                position: 'topRight',
                progressBarColor: '#b51b1b',
                theme: 'dark',
            });
        } else {
            start.disabled = false;
            userSelectedDate = selectedDates[0];
        }
    },
};

flatpickr(datetimePicker, options)

function onStartClick(event) {

    const intervalId = setInterval(() => {

        stayMillisecondsUserDate = userSelectedDate.getTime() - Date.now();

        if (stayMillisecondsUserDate <= 0) {
            clearInterval(intervalId)
            datetimePicker.disabled = false;
            return;
        }

        const timeObj = convertMs(stayMillisecondsUserDate);
        const updateTimeObj = addLeadingZero(timeObj);

        days.textContent = updateTimeObj.days
        hours.textContent = updateTimeObj.hours
        minutes.textContent = updateTimeObj.minutes
        seconds.textContent = updateTimeObj.seconds

        start.disabled = true;
        datetimePicker.disabled = true;
    }, 1000)
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
    days = String(days).padStart(2, '0')
    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')

    return { days, hours, minutes, seconds };
}


