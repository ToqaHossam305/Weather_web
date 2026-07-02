import React from 'react';
import bgImage from '../assets/background.jpg';
import WeatherForecast from './WeatherForecast';
import HeroContent from './HeroContent';

function Heroback({
  current,
  daily,
  cityName,
  searchVal,
  onSearchChange,
  onSearchSubmit,
}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <img
          src={bgImage}
          alt="Weather Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <HeroContent
        current={current}
        cityName={cityName}
        searchVal={searchVal}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />

      <div className="absolute bottom-0 md:top-0 right-0 w-full md:w-auto md:h-full z-20 flex flex-col justify-end">
        <WeatherForecast daily={daily} />
      </div>
    </div>
  );
}

export default Heroback;