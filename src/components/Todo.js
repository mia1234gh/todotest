import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import "./Todo.css";

function Todo({ toDos, completeTodo, removeTodo }) {
  // eslint-disable-next-line
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return toDos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="main">
        <div
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className="text"
        >
          {todo.text}
        </div>
        <div className="icon">
          <AiOutlineCloseCircle
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <FiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    </div>
  ));
}

export default Todo;
