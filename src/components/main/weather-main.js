import React from 'react';
import DayPart from './day-part/day-part';
import Header from '../header';
import style from './weather-main.module.scss';

// export default class WeatherMain extends React.Component{
  
//   render(){
//       return(
//       <main>

//       </main>
//     )
//   }
// };

const WeatherMain = ({city, cityCountry, currentDate, oneDayData, getWeatherFunc}) =>{
  const {Poranek, Dzień, Wieczór, Noc} = oneDayData;
  const {...morningData} = Poranek;
  const {...dayData} = Dzień;
  const {...eveningData} = Wieczór;
  const {...nightData} = Noc;
  const currentArr = [
    {...morningData},
    {...dayData},
    {...eveningData},
    {...nightData}
  ]
  const dayParts = currentArr.map( (elem) => {
    return <DayPart part={elem}/>
  })
  return(
    <main className={style.mainWrapper}>
      <div className={style.innerWrapper}>
        <Header city={city} cityCountry={cityCountry} currentDate={currentDate} getWeatherFunc={getWeatherFunc} />
        <div className={style.weatherItemsWrapper}>
          {dayParts}
        </div>
      </div>
    </main>
  )
}

export default WeatherMain;