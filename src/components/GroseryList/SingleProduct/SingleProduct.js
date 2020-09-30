import React from 'react'
import style from './single-product.module.css'
import AvaliableBtn from "./AvaliableBtn/AvaliableBtn";

const SingleProduct = (props) => {

    return (
        <div className={style['single-product']}>
            <img src={props.products.img}/>
            <h3>{props.products.title}</h3>
            <p className={style.priority}>preiority: {props.products.priority}</p>
            <button onClick={() => props.deleteProduct(props.products.id)} className={style.delete}>delete</button>
            <AvaliableBtn toggleAvaliable={props.toggleAvaliable} id={props.products.id}
                          status={props.products.status}/>
            <span>Last changed: {props.products.date}</span>
        </div>
    )
};

export default SingleProduct;