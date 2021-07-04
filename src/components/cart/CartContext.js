import {createContext} from 'react';

const CartContext = createContext
({
    itemList: [],
    totalPrice: 0,
    add: item => {},
    remove: item => {}
});
export default CartContext;