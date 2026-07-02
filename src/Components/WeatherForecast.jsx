import React from 'react';

function WeatherForecast() {
  const forecastData = [
    { condition: 'Sunny', temp: '12°C', date: '02.07.2026' },
    { condition: 'Cloudy', temp: '9°C', date: '03.07.2026' },
    { condition: 'Mostly Sunny', temp: '11°C', date: '04.07.2026' },
    { condition: 'Sunny', temp: '13°C', date: '05.07.2026' },
    { condition: 'Sunny', temp: '17°C', date: '06.07.2026' },
  ];

  return (
    <div className="w-full md:w-[380px] lg:w-[420px] h-auto md:h-full bg-white/[0.04] backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/10 pt-1 pb-1.5 px-5 md:p-6 lg:p-8 flex flex-col justify-start md:justify-center gap-0 md:gap-1 shadow-2xl text-white font-sans">
      
      {forecastData.map((day, index) => (
        <div 
          key={index} 
          className="flex flex-row md:flex-col justify-between md:justify-end items-center md:items-stretch py-1 md:py-4 lg:py-5 border-b border-white/10 last:border-b-0 transition-all duration-300 hover:bg-white/[0.04] md:hover:px-2 rounded-sm"
        >
          <div className="flex flex-col md:block">
            <span className="text-white/80 text-[11px] md:text-sm lg:text-base font-medium tracking-wide whitespace-nowrap">
              {day.condition}
            </span>
            <span className="text-white/40 md:hidden text-[9px] font-light mt-0.5">
              {day.date}
            </span>
          </div>

          <div className="flex flex-row justify-between items-baseline md:mt-0.5">
            <span className="text-sm md:text-3xl lg:text-4xl font-normal md:font-light tracking-tight">
              {day.temp}
            </span>
            <span className="hidden md:inline text-white/50 text-xs lg:text-sm font-light">
              {day.date}
            </span>
          </div>
        </div>
      ))}

    </div>
  );
}

export default WeatherForecast;