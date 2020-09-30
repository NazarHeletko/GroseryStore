import React from "react";
import style from './avaliable-btn.module.css'

const AvaliableBtn = (props) => {
    return (
        <>
            {props.status === "have" ?
                <button onClick={() => props.toggleAvaliable(props.id)} className={style['stock']}>In stock</button> :
                <button onClick={() => props.toggleAvaliable(props.id)} className={style['stock']}>Not
                    available</button>}
        </>

    )
};

export default AvaliableBtn