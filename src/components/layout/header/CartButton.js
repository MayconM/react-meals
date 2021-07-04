import './CartButton.css';
import CartIcon from './CartIcon';
import CartContext from '../cart/CartContext';
import {useContext} from 'react';

const CartButton = props =>
{
	const cartContext = useContext(CartContext);

	return (
		<button onClick={props.onClick}>
			<CartIcon/>
			Your Cart
			<span className='counter'>`$${cartContext.totalPrice.toFixed(2)}`</span>
		</button>
		);
}
export default CartButton;