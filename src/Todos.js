import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";
import "./todo.css";

export default function Todos() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const todos = useSelector((state) => state.todos);

  const handleClick = () => {
    if (newTodo === "") {
      alert("Please enter a valid todo!");
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          label: newTodo,
          id: Math.ceil(Math.random() * 100),
        },
      });
    }
  };

  return (
    <div className="todos">
      <h3 className="todos__heading">My ToDos</h3>
      <div className="todos__newSection">
        <input
          type="text"
          placeholder="Enter your todo here..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleClick}>Add New</button>
      </div>

      {/* list all todos */}
      <div className="todos__list">
        {!todos || !todos.length ? (
          <p className="todos__notodo">You have no todos left!</p>
        ) : (
          <>
            {todos.map((todo) => {
              return <SingleTodo todo={todo} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}
