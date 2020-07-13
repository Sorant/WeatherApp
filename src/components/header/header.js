import React from 'react';
import Search from './search';
import CityInfo from './city-info';
import style from './header.module.scss'

const Header = ({getWeatherFunc, city, cityCountry, currentDate}) =>{
  return(
    <header className={style.header}>
      <CityInfo city={city} cityCountry={cityCountry} currentDate={currentDate}/>
      <Search getWeatherFunc={getWeatherFunc} />
    </header>
  )
}

export default Header;