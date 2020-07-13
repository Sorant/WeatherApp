import React from 'react';
import style from './greeting-page.module.scss';
import Header from '../header';

// export default class GreetingPage extends React.Component{
//   render(){
//     debugger;
//     return(
//       <div id='greeting-page' className={style.greetingPage}>
//         <div className={[style.title]}>
//           <p className={style.title__upperText}>Pogoda na</p>
//           <p className={style.title__lowerTxt}>Ziemi</p>
//         </div>
//         <Header getWeatherFunc={this.props.getWeather}/>
//       </div>
//     )
//   }
// };

const GreetingPage = ({getWeatherFunc}) =>{
  return(
    <div id='greeting-page' className={style.greetingPage}>
      <div className='container-fluid'>
        <div className={style.wrapper}>
          <div className={[style.title]}>
            <p className={style.title__upperText}>Pogoda na</p>
            <p className={style.title__lowerTxt}>Ziemi</p>
          </div>
          <Header getWeatherFunc={getWeatherFunc} />
        </div>
      </div>
    </div>
  )
}

export default GreetingPage;