import React from 'react';
// testing with context inside the CartProvider, if works this will be removed

const CartContext = React.createContext
({
    itemList: [],
    totalPrice: 0,
    add: item => {},
    remove: item => {}
});
export default CartContext;