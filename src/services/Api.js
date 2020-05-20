import axios from 'axios'

const urlBase = "http://api.openweathermap.org/data/2.5/weather";
const lang = 'pt';
const units = 'metric';

export default {
    getWeather(lat, lon) {
        return axios.get(urlBase, {
            params: {
                lat,
                lon,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang,
                units
            }
        });
    }

}
