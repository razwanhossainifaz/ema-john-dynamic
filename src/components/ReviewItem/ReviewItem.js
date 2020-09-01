import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    console.log(props);
    const {name , img , key , price , star , quantity} = props.product;
    return (
        <div className = "review-item">
            <div>
                <img className = "img-style" src={img} alt=""/>
            </div>
            <div>
                <h3>{name}</h3>
                <p className = "paragraph-style">Quantity : {quantity}</p>
                <h1>$ {price}</h1>
                <p className = "paragraph-style">Star : {star}</p>
                <br/>
                <button className = "button" onClick = {() => props.removeProduct(key)}><FontAwesomeIcon className = "shopping-cart" icon = {faTrash}/>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;