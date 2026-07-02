import axios from "axios";

export const getWeather = async (latitude, longitude) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
  );

  return response.data;
};


export const searchCity = async (city) => {
  const response = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );

  return response.data;
};


