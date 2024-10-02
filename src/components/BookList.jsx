import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../features/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.booksR.books);
  const dispatch = useDispatch();

  console.log('booksState=> ', books);

  const handleDelete = (id) => {
    console.log('deleteId=> ', id);
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2 className="text-center text-xl font-bold mt-10"> BOOKS </h2>
      {books && books.length > 0 ? (
        books?.map((book) => (
          <ul key={book?.id}>
            <li className="mb-2">
              {book.title} by {book.author} - ${book.price} - {book.quantity}pcs -{' '}
              <button onClick={() => handleDelete(book.id)} className="px-3 py-1 bg-stone-100 text-black">
                Delete
              </button>
            </li>
          </ul>
        ))
      ) : (
        <p> NO BOOKS EXISTS </p>
      )}
    </div>
  );
};

export default BookList;
