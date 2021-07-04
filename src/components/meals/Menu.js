import './Menu.css';
import MenuItem from './MenuItem';

//props: itemList(array), onAdd()
//item={name,price,description}

const Menu = props =>
{
    return (
        <div className='outterBox'>
            <ul>
                {props.itemList.map((item, index)=>
                {
                    return (
                        <li><MenuItem item={item}/></li>
                    )
                })}
            </ul>
        </div>
        );
}
export default Menu;