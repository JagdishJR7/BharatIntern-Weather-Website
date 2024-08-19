const API_KEY = `6e9b345fc6f036fefa4ceada7aa1b173`;

const getWeather = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        .catch(error => console.error('Error fetching the weather data:', error));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText("city", temperature.name);
    setInnerText("temp", `${temperature.main.temp}°C`);
    setInnerText("weather", temperature.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const ImgIcon = document.getElementById('image-icon');
    ImgIcon.setAttribute('src', url);
}
