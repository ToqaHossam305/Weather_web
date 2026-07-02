import React from 'react';
import { Droplets, Wind, CloudRain } from 'lucide-react';
import SearchBar from './SearchBar';

function HeroContent({
  current,
  cityName,
  searchVal,
  onSearchChange,
  onSearchSubmit,
}) {
  const time = current?.time?.slice(11, 16);

  return (
    <div className="absolute top-0 left-0 w-full md:w-auto md:h-full z-20 flex flex-col items-center md:items-start justify-start p-4 pt-6 md:pt-12 md:pl-6 lg:pl-10 text-white font-sans gap-6 md:gap-8">
      <div className="w-[90%] sm:w-[340px] md:w-[360px]">
        <SearchBar
          value={searchVal}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-2">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide drop-shadow-lg leading-tight">
          {cityName}
        </h1>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide drop-shadow-md mt-2 leading-none">
          {time}
        </h2>
      </div>

      <div className="text-5xl md:text-6xl lg:text-7xl font-extralight tracking-normal flex items-baseline gap-2 leading-none">
        <span className="block">
          {current && Math.round(current.temperature_2m)}
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl font-light text-white/90 block">
          °C
        </span>
      </div>

      <div className="w-[90%] sm:w-[340px] md:w-[400px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl p-3 md:p-4 flex flex-row justify-around items-center shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center gap-1">
          <Droplets
            className="w-4 h-4 md:w-5 md:h-5 text-white/70"
            strokeWidth={1.5}
          />
          <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">
            Humidity
          </span>
          <span className="text-xs md:text-sm font-medium">
            {current?.relative_humidity_2m}%
          </span>
        </div>

        <div className="h-8 w-[1px] bg-white/10" />

        <div className="flex flex-col items-center gap-1">
          <Wind
            className="w-4 h-4 md:w-5 md:h-5 text-white/70"
            strokeWidth={1.5}
          />
          <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">
            Wind
          </span>
          <span className="text-xs md:text-sm font-medium">
            {current?.wind_speed_10m} km/h
          </span>
        </div>

        <div className="h-8 w-[1px] bg-white/10" />

        <div className="flex flex-col items-center gap-1">
          <CloudRain
            className="w-4 h-4 md:w-5 md:h-5 text-white/70"
            strokeWidth={1.5}
          />
          <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider">
            Precipitation
          </span>
          <span className="text-xs md:text-sm font-medium">
            {current?.precipitation} mm
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;