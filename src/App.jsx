import React, { useState } from 'react'
import Search from './Component/SearchComponent/Search'
import WeatherItem from './Component/CityComponent/WeatherItem'
import './App.css'



const App = () => {
  const [city, setCity] = useState([])

  const weatherHandler = (weather) => {
    setCity(weather)
  }
  return (
    <div className='main-div'>
      <Search weatherHandler={weatherHandler} className='search'/>
      <WeatherItem city={city} className='weatherItem'/>
    </div>
  )
}

export default App