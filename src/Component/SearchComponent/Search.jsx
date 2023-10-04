import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Search.module.css'

const Search = (props) => {
    const [search, setSearch] = useState('')
    let weather = {
        location: '',
        description: '',
        humidity: '',
        wind: '',
        minTemp: '',
        maxTemp: '',
        feels: '',
        pressure: '',
        country: ''
    }


    const fetch = async () => {
        if (!search) {
            const fetchLocation = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=gusau&limit=1&appid=${import.meta.env.VITE_REACT_API_KEY}`)

            const { lat, lon } = fetchLocation.data[0]
            const fetchDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_REACT_API_KEY}`)
            weather.country = fetchDetails.data.sys.country
            weather.location = `${fetchDetails.data.name}, ${weather.country}`
            weather.humidity = fetchDetails.data.main.humidity
            weather.description = fetchDetails.data.weather[0].description
            weather.wind = fetchDetails.data.wind.speed
            weather.minTemp = (Number(fetchDetails.data.main.temp_min) - 273.15).toFixed(2)
            weather.maxTemp = (Number(fetchDetails.data.main.temp_max) - 273.15).toFixed(2)
            weather.feels = (Number(fetchDetails.data.main.feels_like) - 273.15).toFixed(2)
            weather.pressure = Number(fetchDetails.data.main.pressure)

            props.weatherHandler(weather)
        }

    }
    useEffect(() => {
        fetch()
    }, [])

    const searchChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchHandler = async (e) => {
        e.preventDefault()
        if (search) {
            const fetchLocation = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${import.meta.env.VITE_REACT_API_KEY}`)

            const { lat, lon } = fetchLocation.data[0]
            const fetchDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_REACT_API_KEY}`)
            weather.country = fetchDetails.data.sys.country
            weather.location = `${fetchDetails.data.name}, ${weather.country}`
            weather.humidity = fetchDetails.data.main.humidity
            weather.description = fetchDetails.data.weather[0].description
            weather.wind = fetchDetails.data.wind.speed
            weather.minTemp = (Number(fetchDetails.data.main.temp_min) - 273.15).toFixed(2)
            weather.maxTemp = (Number(fetchDetails.data.main.temp_max) - 273.15).toFixed(2)
            weather.feels = (Number(fetchDetails.data.main.feels_like) - 273.15).toFixed(2)
            weather.pressure = Number(fetchDetails.data.main.pressure)

            props.weatherHandler(weather)
            setSearch('')
        }
    }

    return (
        <form onSubmit={searchHandler} className={styles.form}>
            <input type="text" placeholder='Search for a place' onChange={searchChangeHandler} value={search} />
            <button type='submit'>Search</button>
        </form>
    )
}

export default Search