import {createContext} from 'react';
import {useReducer} from 'react';
//import CartContext from './CartContext';

// default state for empty cart
const defaultCartState =
{
    itemList: [],
    totalPrice: 0,
};

// create context for cart
const CartContext = createContext(
    {
        ...defaultCartState,
        add: item => {},
        remove: item => {}
    });

const cartReducer = (state, action) =>
{
    // these 2 will be returned in an obj(cart state) by this reducer
    let updatedItemList = [...state.itemList];
    let updatedTotalPrice = state.totalPrice;
    // find by ID if type already in the cart
    const itemIndex = state.itemList.findIndex(item => item.id===action.item.id);
    // get item if type was found
    const PreviousItem = state.itemList[itemIndex];

    if(action.type === 'add')
    {
        updatedTotalPrice += action.item.amount * action.item.price;

        // item!=null = item exists, increase amount in cart
        if(PreviousItem) 
        {
            // replace for updated item with added amount
            updatedItemList[itemIndex] =
            {
                ...PreviousItem,
                amount: PreviousItem.amount + action.item.amount
            };
        }
        // null=false = new item
        else
        {
            // if item is new, add item to list
            updatedItemList.push({...action.item});
        }

        return {itemList: updatedItemList, totalPrice: updatedTotalPrice};
    }

    if(action.type === 'remove')
    {
        updatedTotalPrice -= action.item.amount * action.item.price;

        if(previousItem)
        {
            if(previousItem.amount <= action.item.amount)
            {
                updatedItemList = updatedItemList.splice(itemIndex, 1);
            }
            else
            {
                updatedItemList = updatedItemList.splice(itemIndex, 1,
                    {
                        ...PreviousItem,
                        amount: PreviousItem.amount - action.item.amount
                    });
            }
        }

        return {itemList: updatedItemList, totalPrice: updatedTotalPrice};
    }
    // default call = first time
    else
    {
        return defaultCartState;
    }
}

const CartProvider = props =>
{
    //initialize reducer to get state handler
    const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

    //functions to manage cart & handle reducer
    const addHandler = item =>
    {
        cartDispatcher({type: 'add', item: item});
    }

    const removeHandler = item =>
    {
        cartDispatcher({type: 'remove', item: item});
    }

    // context value for cart
    const cartContext =
    {
        itemList: cartState.itemList,
        totalPrice: cartState.totalPrice,
        add: addHandler,
        remove: removeHandler
    }

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
        );
}

export default CartProvider;