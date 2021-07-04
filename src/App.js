import {useState} from 'react';
import Header from './components/layout/header/Header';
import CartProvider from './components/cart/CartProvider';
import Menu from '.components/meals/Menu';
import DummyMeals from './meals/DummyMeals'; // to replace for database

function App()
{
    //state for the cart overlay display
    const [showCartState, setShowCartState] = useState(false);


    return (
        <div className="App">
            <CartProvider>
                <Header />
                <main>
                    <Menu itemList={DummyMeals}/>
                </main>
            </CartProvider>
        </div>
    );
}
export default App;