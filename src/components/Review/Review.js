import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import Cart from '../Cart/Cart';
import image from '../../images/giphy.gif';

const Review = () => {
    const [cart , setCart] = useState([]);
    const [orderPlaced , setOrderPlaced] = useState(false)

    const handlePlaceOrder = () => {
        setOrderPlaced(true)
        setCart([]);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    } , [])
    let thankYou; 
    if(orderPlaced){
        thankYou = <img className = "order-place-img" src={image} alt=""/>
    }
    return (
        <div className = "review-container">
            <div className="product-cotainer">
                {
                    cart.map(product => <ReviewItem product = {product} key = {product.key} removeProduct = {removeProduct}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}>
                    <button onClick = {handlePlaceOrder} className="button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;