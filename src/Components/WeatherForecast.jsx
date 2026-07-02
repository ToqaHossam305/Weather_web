import React from 'react';

function WeatherForecast({ daily }) {
  const weatherStatus = {
    0: "Sunny",
    1: "Mainly Sunny",
    2: "Partly Cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Fog",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Heavy Drizzle",
    61: "Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    80: "Rain Showers",
    81: "Rain Showers",
    82: "Heavy Showers",
    95: "Thunderstorm",
  };











  
  return (
    <div className="w-full md:w-[320px] lg:w-[360px] h-auto md:h-full bg-white/[0.04] backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/10 py-2 px-4 md:p-4 lg:p-5 flex flex-col justify-start md:justify-center gap-0 shadow-2xl text-white font-sans">
      {daily?.time?.map((date, index) => (
        <div
          key={index}
          className="flex flex-row md:flex-col justify-between md:justify-end items-center md:items-stretch py-1.5 md:py-2.5 lg:py-3 border-b border-white/10 last:border-b-0 transition-all duration-300 hover:bg-white/[0.04] md:hover:px-1.5 rounded-sm"
        >
          <div className="flex flex-col md:block">
            <span className="text-white/80 text-[10px] md:text-xs lg:text-sm font-medium tracking-wide whitespace-nowrap">
              {weatherStatus[daily.weather_code[index]]}
            </span>
          </div>

          <div className="flex flex-row justify-between items-baseline md:mt-0.5">
            <span className="text-xs md:text-xl lg:text-2xl font-normal md:font-light tracking-tight">
              {Math.round(daily.temperature_2m_max[index])}° / {Math.round(daily.temperature_2m_min[index])}°
            </span>

            <span className="hidden md:inline text-white/50 text-[10px] lg:text-xs font-light">
              {date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;