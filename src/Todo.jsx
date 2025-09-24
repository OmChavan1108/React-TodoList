import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function Todo() {
  const [Add, setAdd] = useState([ { task: "EAT", id: uuidv4(), completed: false }  ]);  //intial task
  const [newtodo, setnewtodo] = useState(""); // Input from user

  function update() {
    if (newtodo.trim() === "") return; // prevent empty task
    setAdd((prev) => [...prev,{ task: newtodo.toUpperCase(), id: uuidv4(), completed: false }]);

    setnewtodo("");
  }

  function updateTodo(e) {
    setnewtodo(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      update();
    }
  }

  function deletetodo(id) {
    setAdd((prevtodo) => prevtodo.filter((todo) => todo.id !== id));
  }

  function isDone(id) {
    setAdd((prevtodo) =>
      prevtodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="todo-container">
      <input type="text"className="todo-input" placeholder="Add task" value={newtodo} onChange={updateTodo} onKeyDown={handleKeyDown}/>
      <br />
      <button className="todo-button" onClick={update}>Add Task</button>
      <hr />

      <h4 className="todo-heading">Task Todo</h4>

      <ul className="todo-list">
        {Add.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >   {todo.task} </span>

            <div className="todo-item-buttons">
            <button className="delete-btn todo-item-buttons"
              onClick={() => deletetodo(todo.id)}
            > Delete</button>
            <button
              className="done-btn todo-item-buttons"
              onClick={() => isDone(todo.id)}
            > {todo.completed ? "Undo" : "Done"}</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
