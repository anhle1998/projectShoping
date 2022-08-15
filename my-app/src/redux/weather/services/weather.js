import axios from 'axios';
 
const getDataWeatherByCityName = async(city) => {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    const response = await axios.get(url);
    const results = response.status === 200 ? response.data : {};
    return results;
}
export const api = {
    getDataWeatherByCityName
}