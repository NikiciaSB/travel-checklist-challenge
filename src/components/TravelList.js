import React from 'react';
import Checked from './Checked'

function TravelList({items, setItems}){
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {items.map(item => (
                    <Checked 
                        key={item.id} 
                        text={item.text}
                        quantity={item.quantity}
                        id={item.id} 
                        setItems={setItems} 
                        items ={items}
                        item ={item}/>
                ))}
            </ul>
        </div>
    )
}

export default TravelList;