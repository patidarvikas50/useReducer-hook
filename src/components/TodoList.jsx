import React, { useReducer, useState } from "react";

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD", payload: task });
      // console.log(task)
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter Title"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
          <button
            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
          >
            Delete
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
