import React from 'react';
import './Cart.css';
import ProductDetail from '../ProductDetail/ProductDetail';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total , product) => total + product.price , 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++){
        let product = cart[i];
        total = Math.round(total + product.price * product.quantity);
    }
    let shipping = 0;
    if(total > 100){
        shipping = 0;
    }
    else if(total > 50){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    
    let tax = (total/10).toFixed(2)

    return (
        <div>
            <h2 className = "cart-header-style">Order Summary</h2>
            <p className = "cart-style">Items Ordered : {cart.length}</p>
            <p className = "cart-style">Product Price : {total}</p>
            <p className = "cart-style">Shipping Cost : {shipping}</p>
            <p className = "cart-style">Tax + Vat : {tax}</p>
            <p className = "cart-style">Total price : {total + shipping + Number(tax)}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;