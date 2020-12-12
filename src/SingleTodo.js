import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SingleTodo({ todo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newTodo, setnewTodo] = useState("");

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <div className="todos__single">
      {edit ? (
        <input
          type="text"
          value={newTodo}
          placeholder={todo.label}
          disabled={!edit}
          onChange={(e) => {
            setnewTodo(e.target.value);
          }}
        ></input>
      ) : (
        <h4>{todo.label}</h4>
      )}

      <div className="todos__buttons">
        <button
          onClick={() => {
            if (edit) {
              dispatch({
                type: "EDIT_TODO",
                payload: {
                  ...todo,
                  label: newTodo,
                },
              });
            }
            setEdit(!edit);
          }}
        >
          {edit ? "Save" : "Edit"}
        </button>
        <button id="deleteBtn" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;
