import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';

export const Basket = () => {
    const { order, handleBasketShow } = useContext(ShopContext);
    const quantity = order.length;

    return (
        <div className="basket blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {
                quantity ? (
                    <span className='basket-quantity'>{quantity}</span>
                ) : null
            }
        </div>
    )
}