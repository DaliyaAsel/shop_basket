import { useContext } from 'react';

import { ShopContext } from '../context/shopContext';
import { BasketItem } from "./BasketItem";

export const BasketList = () => {
    const { order = [], handleBasketShow = Function.prototype } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    console.log(order);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? (order.map(item => 
                    <BasketItem key={item.id} {...item} />
                )) : (
                    <li className="collection-item active">Корзина пуста</li>
                )
            }

            <li className="collection-item active">Общая стоимость : {totalPrice} руб. </li>
            <li className="collection-item "><button className='btn btn-small'>Оформить</button></li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}