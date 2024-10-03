/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/books/booksSlice';
import { useEffect, useRef, useState } from 'react';

const BookForm = ({ bookToEdit }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [click, setClick] = useState(bookToEdit ? 'true' : 'false');

  useEffect(() => {
    if (bookToEdit) {
      setClick(true);
      inputRef.current.focus();
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);

    if (bookToEdit) {
      dispatch(updateBook({ ...formData, id: bookToEdit?.id }));
    } else {
      // Dispatch action to add book
      dispatch(addBook(formData));
      // Reset form
    }

    e.target.reset();
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add A Book Now!</h1>
          <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at itaque nostrum!</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div className="flex gap-3">
            <div>
              <label htmlFor="email" className="sr-only">
                Book Name
              </label>

              <div className="relative">
                <input
                  ref={inputRef}
                  defaultValue={bookToEdit && click ? bookToEdit.title : ''}
                  type="text"
                  name="title"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter book name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Author Name
              </label>

              <div className="relative">
                <input
                  defaultValue={bookToEdit && click ? bookToEdit.author : ''}
                  type="text"
                  name="author"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter author's name"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <label htmlFor="password" className="sr-only">
                Price
              </label>

              <div className="relative">
                <input
                  defaultValue={bookToEdit && click ? bookToEdit.price : ''}
                  type="number"
                  name="price"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Quantity
              </label>

              <div className="relative">
                <input
                  defaultValue={bookToEdit && click ? bookToEdit.quantity : ''}
                  type="number"
                  name="quantity"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter quantity"
                />
              </div>
            </div>
          </div>

          <div className="">
            <button type="submit" className="w-full inline-block rounded-lg bg-lime-500 px-5 py-3  font-bold tracking-widest text-neutral-800">
              {bookToEdit ? 'UPDATE' : 'SUBMIT'}
            </button>
          </div>
        </form>
        <div className="">
          <button onClick={() => setClick(!click)} className="w-full inline-block rounded-lg bg-lime-500 px-5 py-3  font-bold tracking-widest text-neutral-800">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
