import { useState } from "react";


export default function Todo() {
  const [Add, setAdd] = useState(["Eat"]); // Initial task
  const [newtodo, setnewtodo] = useState(""); // Input from user

  function update() {
      setAdd((newAdd) => {
        return [...newAdd, newtodo];
      });
      setnewtodo("");
  }

  function updateTodo(e) {
    setnewtodo(e.target.value);
  }

  return (
    <div className="todo-container">
      <input
        type="text"
        className="todo-input"
        placeholder="Add task"
        value={newtodo}
        onChange={updateTodo}
      />
      <br />
      <button className="todo-button" onClick={update}>
        Add Task
      </button>
      <hr />

      <h4 className="todo-heading">Task Todo</h4>
      <ul className="todo-list">
        {Add.map((todo) => {
          return <li> {todo} </li>;
        })}
      </ul>
    </div>
  );
}
