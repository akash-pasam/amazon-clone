import React from 'react'
import './checkoutproduct.css'
import {useStateValue} from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {

    const [{basket},dispatch]=useStateValue();

    const removeFromBasket =() => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutproduct_image" src={image}/>

            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checckoutproduct_pricce">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>

            <button onClick={removeFromBasket}>Remove from basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
