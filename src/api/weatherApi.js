import axios from "axios";







export const getWeather = 
 async () => {
    const response = await 
    axios.get("https://api.open-meteo.com/v1/forecast?latitude=30.0444&longitude=31.2357&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa/Cairo");
    return response.data;



}