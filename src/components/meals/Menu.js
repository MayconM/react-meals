import './Menu.css';

//props: itemList(array), onAdd()
//item={name,price,description}

const Menu = props =>
{
    return (
        <div className='outterBox'>
            {props.itemList.map((item, index)=>
            {
                return(
                    <div key={index}>
                        <div className='itemLeft'>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <h3>${item.price}</h3>
                        </div>
                        <div className='itemRight'>
                            <h4>
                                Amount
                                <input type='number' value='1' ref={amountRef} max='10' />
                            </h4>
                            <button className='addButton' onClick={props.onAdd}>+Add</button>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
        );
}
export default Menu;