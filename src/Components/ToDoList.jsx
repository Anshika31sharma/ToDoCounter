import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 6)))
      .catch((err) => setError(err.message));
  }, []);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100 max-w-md rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
              className="mr-4"
            />
            <label
              className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.title}
            </label>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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
