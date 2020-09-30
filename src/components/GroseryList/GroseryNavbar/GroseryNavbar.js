import React from 'react'
import style from './grosery-navbar.module.css'

let GroseryNavbar = (props) => {
   const sortActive = (rule) => {
      if(props.sortedBy[rule] === true){
          return style.active
      }
      return false
   };
    return (
        <div className={style.navbar}>
            <span>Sort products by:</span>
            <button onClick={props.setAllToTrueSearch} className={sortActive("all")}>all</button>
            <button onClick={props.setRunOutToTrueSearch} className={sortActive("runOut")}>ran out</button>
            <button onClick={props.setHaveToTrueSearch} className={sortActive("have")}>have</button>
        </div>
    )
};

export default GroseryNavbar;
