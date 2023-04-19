import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const CurrentWeather = ({ latlng }) => {
    const [weatherData, setWeatherData] = useState(null)
    const lat = latlng[0]
    const lon = latlng[1]
    const apiKey = env.REACT_APP_API_KEY
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    useEffect(() => {
		axios
			.get(weatherUrl)
			.then(res => setWeatherData(res.data))
	}, [weatherUrl])

    if (weatherData) {
        const temperature = weatherData.main.temp
        const wind = weatherData.wind.speed
        const icon = weatherData.weather[0].icon
        const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

        return (
            <div>
                <div>Temperature: {temperature} Celsius</div>
                <img src={imgUrl} alt={imgUrl.description} />
                <div>Wind: {wind} m/s</div>
            </div>
        )
    }
}

export default CurrentWeather