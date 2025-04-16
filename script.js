const apiKey = '87b57c09e8a4747434264f71255279e5';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        console.log("Full API Response:", data); // Debug log
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
            <p><strong>Feels Like:</strong> ${Math.round(data.main.feels_like)}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('weather-info').innerHTML = `
            <p>Failed to load weather data.</p>
            <p><small>${error.message}</small></p>
        `;
    });