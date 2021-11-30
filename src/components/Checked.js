function Checked({text,quantity,items,item, setItems}){
        //filters through the list and deltes the item 
        function deleteHandler(){
            setItems(items.filter(el => el.id !== item.id))
        }
        //changes the completed 
        function completeHandler(){
            setItems(items.map(thing=> {
                if(thing.id === item.id){
                    return {
                        ...thing, packed: !thing.packed
                    }
                }
                return thing;
            }));
        }
    return(
        <div className="todo">
            <li className={`todo-item ${item.packed ? "packed" :''}`}>{quantity}x - {text}</li>
            <button onClick={completeHandler} className="complete-btn" ><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default Checked;