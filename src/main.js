import { getImagesByQuery } from "./js/pixabay-api"

const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const value = form.elements['search-text'].value

    if (value.trim() === '') {
        console.log('ok');
        return;
    }

    const resultBackend = getImagesByQuery(value);

    if (resultBackend.lenght) {
        alert('')
    }
}
