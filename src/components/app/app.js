import React from 'react';
import General from '../../scss/general.scss';
import WeatherMain from '../main';
import GreetingPage from '../greeting-page';
import SearchError from '../main/search-error/search-error';

const ApiKey = '3ccc316f118da489f438ecd035703a8b';


export default class App extends React.Component{
  state = {
    greetingPage: true,
    cod: false,
    cityName: '',
    cityCountry: '',
    todayDate: '',
    dayFirstTime: '',
    oneDayData:[

    ],
  }

  getWeather = async (cityname) =>{
    let cityName = cityname;
    const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${ApiKey}&lang=pl&units=metric`);
    const apiData = await apiUrl.json();
    
    this.setState( () =>{
      if(apiData.cod === '200'){
        const currentDateArr = Array.from(apiData.list[0].dt_txt);
        const spaceIndx = currentDateArr.findIndex( (el) => el === " ");
        const todayDate = currentDateArr.slice(0, spaceIndx).join('');
        const dayFirstTime = currentDateArr.slice(spaceIndx + 1, currentDateArr.length);

        const oneDayData = {
          Poranek:{
            dayTime: '',
            temp: '',
            weatherState: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            windDeg: '',
          },
          Dzień:{
            dayTime: '',
            temp: '',
            weatherState: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            windDeg: '',
          },
          Wieczór:{
            dayTime: '',
            temp: '',
            weatherState: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            windDeg: '',
          },
          Noc:{
            dayTime: '',
            temp: '',
            weatherState: '',
            humidity: '',
            pressure: '',
            windSpeed: '',
            windDeg: '',
          },
        };

        const fiveDayData = {
          1:{

          }
        }

        const getOneDayData = (i, dayPath) =>{
          
          function index(obj, dayPath, value) {
            if (typeof dayPath == 'string')
              return index(obj, dayPath.split('.'), value);
            else if (dayPath.length === 1 && value !== undefined)
              return obj[dayPath[0]] = value;
            else if (dayPath.length === 0)
              return obj;
            else
              return index(obj[dayPath[0]], dayPath.slice(1), value);
          }

          const path = index(oneDayData, dayPath);
          path.temp = apiData.list[i].main.temp;
          path.weatherState = apiData.list[i].weather[0].main;
          path.humidity = apiData.list[i].main.humidity;
          path.pressure = apiData.list[i].main.pressure;
          path.windSpeed = Math.round( (apiData.list[i].wind.speed) * 3.6);
          path.windDeg = apiData.list[i].wind.deg;
          if(path.temp){
            path.dayTime = dayPath;
            path.temp = Math.round(path.temp);
          }
        }

        for(let i = 0; i<apiData.list.length; i++){
          let arrayDate = Array.from(apiData.list[i].dt_txt);
          const spaceIndx = arrayDate.findIndex( (el) => el === " ");
          let currentDate = arrayDate.slice(0, spaceIndx).join('');
          let currentTime = arrayDate.slice(spaceIndx+1, arrayDate.length).slice(0, 2).join('');

          let mixArray = Array.from(currentDate).map( (elem) => {
            let Elem = Number(elem);
            return Elem;
          });

          let numberArray = mixArray.filter( elem => !isNaN(elem));
          
          let newArray =numberArray.slice(-2);
          newArray = [newArray[0], newArray[1]+1]
          let arrayOfnewArray = newArray[1].toString().split("");


          console.log(arrayOfnewArray[1]);

          if(todayDate === currentDate){

            if(currentTime >= 6 && currentTime < 12){
              getOneDayData(i,'Poranek');
            }
            else if(currentTime >= 12 && currentTime < 18){
              getOneDayData(i,'Dzień');
            }
            else if(currentTime >= 18 && currentTime < 21){
              getOneDayData(i,'Wieczór');
            }
            else if(currentTime >= 21){
              getOneDayData(i,'Noc');
            }
          }
        }

        return{
          greetingPage: false,
          cod: true,
          cityName: apiData.city.name,
          cityCountry: apiData.city.country,
          dayFirstTime: dayFirstTime,
          todayDate: todayDate,
          oneDayData: oneDayData
        }
      }
      else{
        return{
          greetingPage: false,
          cod: false,
          cityName: '',
          cityCountry: '',
          todayDate: '',
          dayFirstTime: '',
          oneDayData:[],
        }
      }
    });
    
    console.log(apiData);

    console.log(this.state);
    
  }

  
  
  render(){
    const {cityName, cityCountry, cod, todayDate, greetingPage} = this.state;
    const oneDayData = this.state.oneDayData;

    const Page = () =>{
      if( (greetingPage) && (cod == false) ){
        return <GreetingPage getWeatherFunc={this.getWeather} />
      }
      else if( (cod == true) && (cityName !== '' ) ){
        return <WeatherMain city={cityName} cityCountry={cityCountry} currentDate={todayDate} oneDayData={oneDayData} getWeatherFunc={this.getWeather} />
      }
      else return <SearchError />
    }

    return(
      <div className='main-wrapper'>
        <Page />
      </div>
    )
  }

}