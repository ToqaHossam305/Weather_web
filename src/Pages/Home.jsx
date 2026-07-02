
import {useEffect, useState} from "react";
import {getWeather} from "../api/weatherApi"
import Heroback from '../Components/Heroback'; 
import HeroContent from "../Components/HeroContent";
import WeatherForecast from "../Components/WeatherForecast";


function Home() {
   const [weather, setweather] = 
   useState(null);
   
   useEffect(() => {
     const loadWheather = async () =>
       {
       const data = await getWeather();
       setweather(data);

       console.log(data);
     };

     loadWheather();
   }, []);

 return (
  <>
    <Heroback />
    <HeroContent 
    current={weather?.current} />



    
  </>
);
}

export default Home;