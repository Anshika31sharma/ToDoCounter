import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100 max-w-md rounded shadow-md text-center">
      <p className="text-4xl font-bold mb-4">Count: {count}</p>
      <div className="flex justify-center">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-orange-500 text-white px-4 py-2 rounded mr-2 hover:bg-orange-600"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
