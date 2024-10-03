import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  books: [
    { id: nanoid(), title: 'Test book one', author: 'Author one', price: 250, quantity: 2 },
    { id: nanoid(), title: 'Test book two', author: 'Author two', price: 450, quantity: 4 },
    { id: nanoid(), title: 'Test book three', author: 'Author three', price: 450, quantity: 3 },
    { id: nanoid(), title: 'Test book four', author: 'Author four', price: 850, quantity: 5 },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      console.log('action.payload=> ', action.payload);
      const { id, title, author, price, quantity } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);
      // const idx = state.books.findIndex((book) => book.id === id);
      // console.log(idx);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
    addBook: (state, action) => {
      state.books.push({
        // id: state.books.length + 1,
        id: nanoid(),
        ...action.payload,
      });
    },
  },
});

export default bookSlice.reducer;
export const { deleteBook, addBook, updateBook } = bookSlice.actions;
