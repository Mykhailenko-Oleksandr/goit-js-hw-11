// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// import icon from '../img/error.svg'

import axios from "axios";


// axios.get('/users')
//     .then(res => {
//         console.log(res.data);
//     });



/**
 * getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), 
 * здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
 */

export function getImagesByQuery(query) {
    axios.get("https://jsonplaceholder.typicode.com/users", {
        params: {
            key: '',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
        .then(res => {
            console.log(res.data);
        });
}

getImagesByQuery('value')


