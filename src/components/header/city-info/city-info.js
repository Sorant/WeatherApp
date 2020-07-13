import React from 'react';
import style from './city-info.module.scss';

const CityInfo = ({city, cityCountry, currentDate}) =>{
  if((city !== undefined)){
    return (
      <div className={style.cityInfo}>
        <div className="header__city-info__filter"></div>
        <div className="header__city-info__data">
          <h1 className={style.city}>
            {city},
            <span className={style.cityCountry}>
              {cityCountry}
            </span>
          </h1>
          <p className={style.date}>{currentDate}</p>
        </div>
      </div>
    )
  }
  else{
    return <></>
  }
}

export default CityInfo;