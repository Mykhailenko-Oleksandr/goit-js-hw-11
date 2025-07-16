import axios from "axios";
import { showLoader } from "./render-functions";
import iziToast from "izitoast";
import icon from '../img/error.svg';

export function getImagesByQuery(query) {
    
   return axios.get("https://pixabay.com/api/", {
        params: {
            key: '51327583-eda9110ddf8c3e7e62438a086',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
        .then(res => {
            return res.data;
        })
       .catch(error => {
        return iziToast.error({
            class: 'izi-toast',
            message: error.message,
            messageColor: '#fff',
            messageSize: '16',
            messageLineHeight: '24',
            backgroundColor: '#ef4040',
            iconUrl: icon,
            position: 'topRight',
            progressBarColor: '#b51b1b',
            theme: 'dark',
        })
    })
}