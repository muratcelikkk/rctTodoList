import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="container">
      <div className="App">
      
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="addbtn" onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button className="btn" onClick={() => deleteItem(item.id)}>X</button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
    </div>
    
  );
}

export default App;
