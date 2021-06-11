import './Header.css';

const Header = props =>
{
    return (
        <header>
            <div className='upperBox'>
                <h1>ReactMeals</h1>

            </div>
        
            <div className='banner'>
                <div className='textBox'>
                    <h2>Delicious Food, Delivered To You</h2>
                    <p>Choose your favorite meal from out broad selection of avaiable
                    meals and enjoy a delicious lunch or dinner at home.</p>
                    <p>All our meals are coocked with high-quality ingredients,
                    just-in-time and of course by our experienced chefs!</p>
                </div>
            </div>
         </header>
    );
};
export default  Header;