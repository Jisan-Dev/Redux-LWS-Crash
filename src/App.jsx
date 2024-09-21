import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mb-10">Understanding Redux</h1>
      <div className="shadow-2xl p-10 pt-8">
        <h2 className="mb-6 text-lg">Counter 1</h2>
        <div className="flex items-center justify-center mb-4">
          <button className="block px-20 py-10" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          <button className="ml-2 bg-lime-600">Increment</button>
          <button className="ml-2 bg-red-600">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
