/* eslint-disable react/prop-types */
function Counter({ counter, count, onIncrement, onDecrement }) {
  return (
    <div className="shadow-2xl p-10 pt-8">
      <h2 className="mb-6 text-lg">Counter {counter?.id}</h2>
      <div className="flex items-center justify-center mb-4">
        <button className="block px-20 py-10">count is {count}</button>
      </div>
      <div>
        <button className="ml-2 bg-lime-600" onClick={onIncrement}>
          Increment
        </button>
        <button onClick={onDecrement} className="ml-2 bg-red-600">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
