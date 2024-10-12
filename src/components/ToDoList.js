// src/components/ToDoList.js
import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ items, toggleComplete, deleteItem }) => {
  return (
    <div className="todo-list">
      {items.length === 0 ? (
        <p>No tasks available. Add a task to get started!</p>
      ) : (
        items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))
      )}
    </div>
  );
};

export default ToDoList;
