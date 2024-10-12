// src/components/ToDoItem.js
import React from "react";

const ToDoItem = ({ item, toggleComplete, deleteItem }) => {
  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(item.id)}>{item.text}</span>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;
