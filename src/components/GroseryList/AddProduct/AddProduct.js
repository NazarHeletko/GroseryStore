import React, {useState} from "react";
import style from "./add-product.module.css"

let AddProduct = (props) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [priority, setPriority] = useState('');
    const [isAvaliable, setIsAvaliable] = useState(false);



    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const onChangeUrl = (e) => {
        setImg(e.target.value)
    };
    const onChangePriority = (e) => {
        setPriority(e.target.value)
    };

    const onChangeAvaliable = () => {
        setIsAvaliable(!isAvaliable)
    };


    const newProduct = {
        title,
        img,
        status: isAvaliable ? "have" : "ran out",
        priority: parseInt(priority) === NaN ? 5 : priority,
        id: props.lengthProducts +1,
        date: (new Date()).toString()
    };


    return(
        <div className={style['add-product']}>
            <h2>Add new product</h2>
            <div className={style.title}>
                <p>Title:</p><input onChange={onChangeTitle} value={title} type='text' />
            </div>
            <div className={style.img}>
                <p>Image url:</p><input onChange={onChangeUrl} value={img}  type='text' />
            </div>
            <div className={style.avaliable}>
                <p>Is avaliable:</p><input onChange={onChangeAvaliable} checked={isAvaliable} type='checkbox' />
            </div>
            <div className={style.priority}>
                <p>Priority:</p><input onChange={onChangePriority} type='text' />
            </div>
            <button onClick={()=>props.addNewProduct(newProduct)} className={style.add}>add</button>
        </div>
    )
};

export default AddProduct;