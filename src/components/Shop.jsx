import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../context/shopContext';


import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Basket } from './Basket';
import { BasketList } from './BasketList';




export const Shop = () => {

    const { setGoods, loading, order, isBasketShow} = useContext(ShopContext);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                setGoods(data.featured);
            });

    }, []);

    return (
        <main className="container content">
            <Basket quantity={order.length} />
            {
                loading ? <Preloader /> : <GoodsList />
            }
            {
                isBasketShow && <BasketList />
            }
        </main>
    )
};