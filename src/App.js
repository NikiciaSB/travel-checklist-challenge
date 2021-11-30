import React, {useState, useEffect} from 'react';
import './App.css';
//Importing components 
import Form from './components/Form'
import TravelList from './components/TravelList'
import BigList from './components/BigList';

function App() {
  //this will collect the data in the input text field
  const [inputText, setInputText] = useState(""); 
  // this captures all the data entered into the text field amd puts it into an array
  const [items , setItems] = useState([]);
  //this captures the quantity of the items 
  const [inputQuant, setInputQuant] = useState(1)
  //this is should hold the state of the item all, packed or not packed 
  const [status, setStatus] = useState('all');
  
  //seperates the items filtered by status 
  // const [filteredItems, setFilteredItems] = useState([]);

//function to check the status of the items and filter out the items based on packed and not packed
  // useEffect(() => {
  //   const filterHandler=(status) =>{
  //     console.log("This is the status in App: "+status)
  //     switch(status){
  //       case 'packed':
  //         console.log("inside packed");
  //         setFilteredItems(items.filter(item => item.packed === true));
  //         break;
  //       case 'not-packed':
  //         console.log("inside not-packed");
  //         setFilteredItems(items.filter(item => item.packed === false));
  //       break;
  //       default:
  //         console.log("inside default");
  //         setFilteredItems(items);
  //         break;
  //     }
  //   };
  //   filterHandler();
  // },[items, status])
  
/* passes the state values to the Form and the TravelList & Displays the seprate pages to the main page  */
  return (
    <div className='App'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header>My Travel Checklist</header>
            <p>Welcome to 'My Travel Checklist' where you can enter in all the items you may need for your next upcoming adventure. Simply enter the individual item into the text box as well as the number of items and press the <span className="bold">plus</span>. Once added to the list, click the <span className="bold">check</span> to cross off the items that you've already packed. And if you no longer want to an item on your list just click on the <span className="bold">trash can</span> to remove it. You can also filter the list to see what items you have left to pack.</p>
          </div> 
        </div>
        <div className="row">
        <BigList/>
        </div>
        <div className="row">
          <Form 
          items ={items} 
          setItems = {setItems} 
          inputText = {inputText} 
          setInputText={setInputText}
          inputQuant={inputQuant}
          setInputQuant={setInputQuant}
          setStatus={setStatus}/> 
        </div>
        <div className="row">
          <TravelList setItems={setItems} items ={items}/>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default App;
