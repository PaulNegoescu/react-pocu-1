import { useEffect, useState } from 'react';

function kelvinToCelsius(degK) {
  return (degK - 272.15).toFixed(1);
}

export function Weather() {
  const [data, setData] = useState(null);
  const [geolocation, setGeolocation] = useState({
    lat: null,
    lon: null,
  });
  const [inputValues, setInputValues] = useState({
    city: '',
    country: 'RO',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geo) => {
      setGeolocation({ lat: geo.coords.latitude, lon: geo.coords.longitude });
    }, console.warn);
  }, []);

  useEffect(() => {
    const { lat, lon } = geolocation;
    if (!lat || !lon) {
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8feb7eed04a11a56e7ac15279797d21d`
    )
      .then((res) => res.json())
      .then((weather) => {
        setInputValues({ city: weather.name, country: weather.sys.country });
        setData(weather);
      });
  }, [geolocation]);

  function handleInputChange(e) {
    // const newValues = { ...inputValues };
    // newValues[e.target.name] = e.target.value;
    // setInputValues(newValues);
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  function handleSearch(e) {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValues.city},${inputValues.country}&appid=8feb7eed04a11a56e7ac15279797d21d`
    )
      .then((res) => res.json())
      .then((weather) => setData(weather));
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={handleSearch}>
        <p>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={inputValues.city}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={inputValues.country}
            onChange={handleInputChange}
          >
            <option value="RO">Romania</option>
            <option value="ES">Spain</option>
            <option value="US">USA</option>
          </select>
        </p>
        <p>
          <button type="submit">Search</button>
        </p>
      </form>
      <p>
        {kelvinToCelsius(data.main.temp)}&deg;C
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].main + ' icon'}
          width="50"
        />
      </p>
      <p>Today's weather is {data.weather[0].main}.</p>
    </>
  );
}
