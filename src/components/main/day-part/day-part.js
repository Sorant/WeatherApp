import React from 'react';
import style from './day-part.module.scss';
import humidityIcon from '../../../img/icons/humidity-icon.svg';
import pressureIcon from '../../../img/icons/pressure-icon.svg';
import windIcon from '../../../img/icons/wind-icon.svg';

const DayPart = ({part}) =>{
  const {dayTime, temp, weatherState, humidity, pressure, windSpeed, windDeg} = part;
  if(dayTime !== ''){

    let windDir;
    // if( (windDeg > 337.5) && (windDeg <= 22.5) ) windDir = 'północny';
    if(windDeg > 337.5) windDir = 'północny';
    if(windDeg <= 22.5) windDir = 'północny';
    else if( (windDeg > 22.5) && (windDeg <= 67.5) ) windDir = 'półn-wsch';
    else if ( (windDeg > 67.5) && (windDeg <= 112.5) ) windDir = 'wschodni';
    else if ( (windDeg > 112.5) && (windDeg <= 157.5) ) windDir = 'połud-wsch';
    else if ( (windDeg > 157.5) && (windDeg <= 202.5) ) windDir = 'południowy';
    else if ( (windDeg > 202.5) && (windDeg <= 247.5) ) windDir = 'Połud-zach';
    else if ( (windDeg > 247.5) && (windDeg <= 292.5) ) windDir = 'zachodni';
    else if ( (windDeg > 292.5) && (windDeg <= 337.5) ) windDir = 'półn-zach';

    let nightState;

    if(dayTime === 'Noc'){
      nightState = ' night';
    }
    else{
      nightState = '';
    }

    return(
      <div className={style.dayItem}>
        <h1 className={style.title}>{dayTime}</h1>
        <div className={style.mainWeatherWrapper}>
          <p className={style.temp}>
            {temp}
            <span className={style.tempSign}>C</span>
          </p>
          <div className={[weatherState + nightState]}></div>
        </div>
    <div className={`${style.footerElem}`}>
          <div className={style.icon}>
            <img src={humidityIcon} alt="humidity icon"/>
          </div>
          <div className={`${style.footerElemData}`}> 
            Wilgotność: {humidity} %
            </div>
        </div>
        <div className={`${style.footerElem}`}>
          <div className={style.icon}>
              <img src={pressureIcon} alt="pressure icon"/>
          </div>
          <div className={`${style.footerElemData}`}>
            Ciśnienie: {pressure} hPa
            </div>
        </div>
        <div className={`${style.footerElem}`}>
          <div className={style.icon}>
            <img src={windIcon} alt="wind icon"/>
          </div>
          <div className={`${style.footerElemData}`}>
            Wiatr: {windDir}, {windSpeed} km/h
          </div>
        </div>
      </div>
    )
  }
  else{
    return <></>
  }
}

export default DayPart;