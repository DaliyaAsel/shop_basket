import { useContext, useState } from 'react';
import { ShopContext } from '../context/shopContext';

import imgPlaceholder from '../img/placeholder.png';

export const GoodsItem = ({ id, name, description, price, full_background }) => {

    const { addToBasket, isBasketShow } = useContext(ShopContext);
    const [count, setCount] = useState(0);
    const emptyImg = 'https://media.fortniteapi.io/images/3323146ddcc4456f977b4cacff96ae00/background_full.ru.png';
    const disabledBtn = count < 1 ? false : true;


    return (
        <div className="card" id={id} >
            <div className="card-image">
                <img src={full_background !== emptyImg ? full_background : imgPlaceholder} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p className="descr">{description}</p>
                <div className="card-action" data-title={disabledBtn ? "Товар добавлен в корзину" : 'Хотите добавить товар в корзину ?'}>
                    <button className="btn" onClick={() => {
                        setCount({ count: count + 1 })
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }}
                      disabled={isBasketShow} >Купить</button>
                    <span className="right" style={{ fontSize: '1.6rem' }}>{price} руб. </span>
                </div>

            </div>
        </div>

    )
}