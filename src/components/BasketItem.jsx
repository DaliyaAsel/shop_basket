import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';

export const BasketItem = ({ id, name, price, quantity }) => {
    const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return (
        <li className='collection-item'>
            {name}{' '}
            <i
                className='material-icons basket-quantity inc'
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            <i
                className='material-icons basket-quantity dec'
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            x{quantity}{' '} = {price * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}
