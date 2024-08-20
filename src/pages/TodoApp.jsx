import React, { useState } from "react";

function TodoApp() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, todo: "Hello", disabled: true },
    { id: 2, todo: "World", disabled: true },
  ]);

  function addTodo() {
    setTodos([...todos, { id: Date.now(), todo: value, disabled: true }]);
    setValue("");
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((item, index) => item.id !== id);
    console.log(updatedTodos);

    setTodos(updatedTodos);
  }

  function deleteAll() {
    setTodos([]);
  }

  function editTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, disabled: false } : todo
    );
    setTodos(updatedTodos);
  }

  function updateTodo(id, value) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: value, disabled: true } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo App in React</h1>

      <hr />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteAll}>Delete All</button>

      <br />

      <ul>
        {todos.map((v, i) => (
          <li key={v.id}>
            <input
              type="text"
              disabled={v.disabled}
              defaultValue={v.todo}
              onChange={(e) => e.target.value}
            />
            {v.disabled ? (
              <button
                onClick={() => {
                  editTodo(v.id);
                }}
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  updateTodo(v.id, value);
                }}
              >
                Update
              </button>
            )}

            <button
              onClick={() => {
                deleteTodo(v.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
