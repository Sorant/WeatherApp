import React from 'react';
import style from './search.module.scss';

export default class Search extends React.Component {

  // cityTyping(){
  //   console.log(this.value);
  // }

  state = {
    currentValue: ''
  }


  cityTyping = (value) => {
    this.setState(({ currentValue }) => {
      return {
        currentValue: value
      }
    });
  };

  checkWeather = () => {
    const { getWeatherFunc } = this.props;
    const { currentValue } = this.state;
    getWeatherFunc(currentValue);
  }

  checkWeatherOnKeyPress = (key) => {
    if (!key) key = window.event;
    let keyCode = key.keyCode || key.which;
    if (keyCode == '13') {
      this.checkWeather();
    }
  }

  render() {
    return (
      <div>
        <h3 className={style.title}>Miasto</h3>
        <input id='searchCityId' className={style.searchInput} type="text" placeholder="np. Rzeszów" onChange={e => this.cityTyping(e.target.value)} onKeyPress={e => this.checkWeatherOnKeyPress(e.target.key)} />
        <button id='checkBtnId' className={style.searchButton} onClick={this.checkWeather}>Sprawdź</button>
      </div>
    )
  }
}