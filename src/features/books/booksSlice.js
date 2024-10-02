import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Test book one', author: 'Author one', price: 250, quantity: 2 },
    { id: 2, title: 'Test book two', author: 'Author two', price: 450, quantity: 4 },
    { id: 3, title: 'Test book three', author: 'Author three', price: 450, quantity: 3 },
    { id: 4, title: 'Test book four', author: 'Author four', price: 850, quantity: 5 },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    addBook: (state, action) => {
      state.books.push({
        ...action.payload,
        id: state.books.length + 1,
      });
    },
  },
});

export default bookSlice.reducer;
export const { deleteBook, addBook } = bookSlice.actions;
