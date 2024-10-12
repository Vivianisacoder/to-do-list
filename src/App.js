// src/App.js
import React, { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  // Load items from localStorage on component mount
  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setItems([newItem, ...items]);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <InputForm addItem={addItem} />
      <ToDoList
        items={items}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
