/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((sum, curr) => sum + curr.value, 0);

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);

    // setCount((prevCount) => prevCount + 1);
    // Update the counter's value in the Redux store here...
    // Example: dispatch(incrementCounter(counterId));
    // Implement the necessary logic to update the Redux store based on the given counterId and increment its value.
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          id: counter.id,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  return (
    <>
      <h1 className="mb-10">Understanding Redux</h1>
      <div className="flex gap-2">
        {counters.map((counter) => (
          <Counter key={counter.id} counter={counter} count={counter.value} onIncrement={() => handleIncrement(counter.id)} onDecrement={() => handleDecrement(counter.id)} />
        ))}
      </div>
      <div>
        <Stats count={totalCount} />
      </div>
    </>
  );
}

export default App;
