import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counters/counterSlice';
import Posts from './components/Posts';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { useState } from 'react';

function App() {
  const [bookToEdit, setBookToEdit] = useState(null);
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, curr) => sum + curr.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
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
      <h2 className="text-center text-xl font-bold"> POSTS </h2>
      <Posts />

      <h1 className="mt-20">ANISUL ISLAM</h1>
      <BookList handleEdit={handleEdit} />
      <BookForm bookToEdit={bookToEdit} />
    </>
  );
}

export default App;
