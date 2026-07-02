import { useEffect, useState } from "react";
import { getWeather, searchCity } from "../api/weatherApi";
import Heroback from "../Components/Heroback";

function Home() {
  const [searchVal, setSearchVal] = useState("");
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("Cairo");

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const result = await searchCity(searchVal);

    if (!result.results || result.results.length === 0) {
      alert("City not found");
      return;
    }

    const city = result.results[0];

    setCityName(city.name);

    const data = await getWeather(city.latitude, city.longitude);

    setWeather(data);
  };

  useEffect(() => {
    const loadWeather = async () => {
      const data = await getWeather(30.0444, 31.2357);
      setWeather(data);
    };

    loadWeather();
  }, []);

  return (
    <Heroback
      current={weather?.current}
      daily={weather?.daily}
      cityName={cityName}
      searchVal={searchVal}
      onSearchChange={handleSearchChange}
      onSearchSubmit={handleSearchSubmit}
    />
  );
}

export default Home;