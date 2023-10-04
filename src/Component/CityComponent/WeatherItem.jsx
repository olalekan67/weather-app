import React from 'react'
import styles from './WeatherItem.module.css'

const WeatherItem = (props) => {
    return (
        <div className={styles['weather-item']}>
            {!props.city.minTemp && <h1 className={styles.loading}>Loading....</h1>}
            {props.city.minTemp &&
                <div className={styles['weather']}>
                    <div className={styles['weather-focus']}>
                        <h1>{Math.round(props.city.minTemp)}<sup>o</sup>C </h1>
                        <h3>{props.city.location}</h3>
                        <p>{props.city.description}</p>
                    </div>
                    <div className={styles['weather-details']}>
                        <p>Weather details</p>
                        <div>
                            <p>Location</p>
                            <p>{props.city.location}</p>
                        </div>
                        <div>
                            <p>Description</p>
                            <p>{props.city.description}</p>
                        </div>
                        <div>
                            <p>Humidity</p>
                            <p>{props.city.humidity}%</p>
                        </div>
                        <div>
                            <p>Wind</p>
                            <p>{props.city.wind} m/s</p>
                        </div>
                        <div>
                            <p>Min</p>
                            <p>{props.city.minTemp}<sup>o</sup>C</p>
                        </div>
                        <div>
                            <p>Max</p>
                            <p>{props.city.maxTemp}<sup>o</sup>C</p>
                        </div>
                        <div>
                            <p>Feels</p>
                            <p>{props.city.feels}<sup>o</sup>C</p>
                        </div>
                        <div>
                            <p>Pressure</p>
                            <p>{props.city.pressure} hPa</p>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}

export default WeatherItem