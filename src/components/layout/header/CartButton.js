import './CartButton.css';
import CartIcon from './CartIcon';

const CartButton = props =>
{
	return (
		<button onClick={props.onClick}>
			<CartIcon/>
			Your Cart
			<span className='counter'>12</span>
		</button>
		);
}
export default CartButton;