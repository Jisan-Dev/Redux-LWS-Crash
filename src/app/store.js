import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import booksReducer from '../features/books/booksSlice';

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
    booksR: booksReducer,
  },
});

export default store;
