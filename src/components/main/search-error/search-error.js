import React from 'react';
import style from './search-error.module.scss'
import moon from '../../../img/error-illustration.svg';

const SearchError = () =>{
  return(
    <div className={style.mainWrapper}>
      <div className={style.itemWrapper}>
        <div className={style.errorIllustration}>
          <img src={moon} alt="księżyc/moon"/>
        </div>
        <p className={style.title}>Nie znaleziono miasta</p>
      </div>
    </div>
  )
}

export default SearchError;