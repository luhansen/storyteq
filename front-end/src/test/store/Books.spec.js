import { createStore } from 'vuex';
import books from '../../store/books';

describe('Vuex Store - Books Module', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      modules: {
        books,
      },
    });
  });

  it('should filter books with the searchBooks action', async () => {
    await store.dispatch('books/searchBooks', 'don');

    const searchResults = store.getters['books/getSearchResults'];
    expect(searchResults).toEqual([
      'Don Quixote - Miguel De Cervantes'
    ]);
  });

  it('should not filter books when the search term has less than 3 characters', async () => {
    await store.dispatch('books/searchBooks', 'do');

    const searchResults = store.getters['books/getSearchResults'];
    expect(searchResults).toEqual([]);
  });

  it('should update the state with the setSearchResults mutation', async () => {
    store.commit('books/setSearchResults', ['Don Quixote - Miguel De Cervantes']);

    const searchResults = store.getters['books/getSearchResults'];
    expect(searchResults).toEqual(['Don Quixote - Miguel De Cervantes']);
  });

  it('should return search results with the getSearchResults getter', async () => {
    await store.dispatch('books/searchBooks', 'cla');

    const searchResults = store.getters['books/getSearchResults'];
    expect(searchResults).toEqual([
      'Clarissa - Samuel Richardson'
    ]);
  });
});
