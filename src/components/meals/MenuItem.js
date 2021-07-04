import './MenuItem.css';
import CartContext from '../cart/CartContext';
import {useContext} from 'react';

const MenuItem = props =>
{
    const cartContext = useContext(CartContext);

    return (
        <div className='outterBox' key={props.item.id}>
            <div className='leftBox'>
                <h4>{props.item.name}</h4>
                <p>{props.item.description}</p>
            </div>
            <div className='rightBox'>
                <h3>{props.item.amount} x $ {props.item.price}</h3>
                <button className='addButton' onClick={cartContext.onAdd.bind(props.item)}>+</button>
            </div>
            <hr />
        </div>
    );
}
export default MenuItem;