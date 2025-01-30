let weatherData = document.getElementById("weatherData")
document.addEventListener("DOMContentLoaded", () => {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError)
    } else {
        displayError("Geolocation is not supported by this browser.");
    }
}
async function showPosition(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=865e59b01fdeaecdc639e00702af2b5c`)
        const data = await response.json()



        if (data.cod !== 200) {
            displayError("Unable to fetch weather data.");
            return
        }

        let tempInCelcius = (data.main.temp - 273.15).toFixed(0)
        
        const weatherInfo = {
            "City": data.name,
            "Country": data.sys.country,
            "Temperature": `${tempInCelcius} °C`,
            "Pressure": `${data.main.pressure} hPa`,
            "Wind Speed": `${data.wind.speed} m/s`,
            "Humidity": `${data.main.humidity} %`,
            "lat": data.coord.lat,
            "lon": data.coord.lon,
        };
        weatherData.innerHTML = '';

        Object.entries(weatherInfo).forEach(([key, value]) => {
            const paragraph = document.createElement("li");
            paragraph.textContent = `${key}: ${value}`;
            weatherData.appendChild(paragraph);
        });


    } catch (error) {
        console.log(error);
        displayError("Error fetching weather data.");
    }
}

function displayError(message) {
    weatherData.innerHTML = `<p style="color: red;">${message}</p>`;
}

function handleError(error) {
    let message = "Unable to retrieve your location.";
    if (error.code === error.PERMISSION_DENIED) {
        message = "Permission to access location was denied.";
    } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = "Location information is unavailable.";
    }
    displayError(message);
}