import { createStore } from 'vuex';
import cities from './cities';
import books from './books';

export default createStore({
  modules: {
    cities,
    books,
  },
});
