import React from 'react'
import style from './grosery-list.module.css'
import GroseryNavbar from "./GroseryNavbar/GroseryNavbar";
import SingleProduct from "./SingleProduct/SingleProduct";
import AddProduct from "./AddProduct/AddProduct";

let Groserylist = (props) => {
    let enteriesArr = props.products.slice();
    let sortedByPriority = (arr) => {
        arr.sort((a, b) => a.priority > b.priority ? 1 : -1);
    };
    sortedByPriority(enteriesArr);

    return (
        <div className={style['grosery-list']}>
            <h1>grosery list</h1>
            <GroseryNavbar setAllToTrueSearch={props.setAllToTrueSearch}
                           setRunOutToTrueSearch={props.setRunOutToTrueSearch}
                           setHaveToTrueSearch={props.setHaveToTrueSearch} sortedBy={props.sortedBy}/>
            <div className={style['products-all']}>
                {props.sortedBy.all ? enteriesArr.map(item => <SingleProduct key={item.id}
                                                                             toggleAvaliable={props.toggleAvaliable}
                                                                             deleteProduct={props.deleteProduct}
                                                                             products={item}/>) : null}
                {props.sortedBy.runOut ? enteriesArr.filter((el => el.status === "ran out")).map(item =>
                    <SingleProduct key={item.id} toggleAvaliable={props.toggleAvaliable}
                                   deleteProduct={props.deleteProduct}
                                   products={item}/>) : null}
                {props.sortedBy.have ? enteriesArr.filter((el => el.status === "have")).map(item => <SingleProduct
                    deleteProduct={props.deleteProduct}
                    key={item.id}
                    toggleAvaliable={props.toggleAvaliable}
                    products={item}/>) : null}
                <AddProduct lengthProducts={props.products.length} addNewProduct={props.addNewProduct}/>
            </div>
        </div>
    )
};

export default Groserylist;
