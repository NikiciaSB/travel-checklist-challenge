import React from 'react';

function Form({setInputText, items, setItems,inputText,inputQuant,setInputQuant,setStatus}){
    //Captures the text value for the item that is typed in
    const inputTextHandler = (e)=> {
        setInputText(e.target.value);
    };
    //Captures the quantity of the item 
    const inputQuantHandler = (e)=> {
        setInputQuant(e.target.value);
    };
        //Captures the status from the drop down and saves it
    const setStatusHandler =(e) =>{
        setStatus(e.target.value);
    };
    //submits the item, quanitity, id and status to the Items array and resets the text fields
    const submitItemHandler = (e) =>{
        e.preventDefault(); //prevents from refreshing the whole page
        setItems([...items, {text: inputText,quantity: inputQuant, packed: false,id:Math.random()*1000}])
        setInputText("");
        setInputQuant(1);
    }
    return (
        <div>
            <form>
                <div className="mb">
                    <label className="form-label">  Item</label>
                    <input value ={inputText} type="text" className="todo-input " onChange={inputTextHandler}/>
                </div>
                <div className="mb">
                    <label className="form-label">Quantity</label>
                    <input value ={inputQuant} type="text" className="todo-input " onChange={inputQuantHandler}/>
                </div>
                <button className="todo-button" type="submit" onClick={submitItemHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={setStatusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="packed">Packed</option>
                    <option value="not-packed">Not Packed</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
export default Form;