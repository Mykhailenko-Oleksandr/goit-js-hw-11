import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const delay = form.elements.delay.value;
    const state = form.elements.state.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay)
    })
        .then(value => iziToast.info({
            class: 'izi-toast',
            message: value,
            messageColor: '#fff',
            messageSize: '16',
            messageLineHeight: '24',
            icon: '',
            backgroundColor: '#59a10d',
            position: 'topRight',
            progressBarColor: '#326101',
            theme: 'dark',
        }))
        .catch(value => iziToast.info({
            class: 'izi-toast',
            message: value,
            messageColor: '#fff',
            messageSize: '16',
            messageLineHeight: '24',
            icon: '',
            backgroundColor: '#ef4040',
            position: 'topRight',
            progressBarColor: '#b51b1b',
            theme: 'dark',
        }));

    form.reset();
}