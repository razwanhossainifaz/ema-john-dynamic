import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img , name , seller , price , stock , key} = props.product
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4><Link to = {"/product/" + key}>{name}</Link></h4>
                <p>By : {seller}</p>
                <h1>$ {price}</h1>
                <h2>Only {stock} left in the stock - Order soon</h2>
                {props.showAddToCart && <button className="button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon className = "shopping-cart" icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;