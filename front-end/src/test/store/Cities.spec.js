import { createStore } from 'vuex';
import cities from '../../store/cities';

describe('Vuex Store - Cities Module', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      modules: {
        cities,
      },
    });
  });

  it('should filter cities with the searchCities action', async () => {
    await store.dispatch('cities/searchCities', 'san');

    const searchResults = store.getters['cities/getSearchResults'];
    expect(searchResults).toEqual([
      'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'thousand oaks'
    ]);
  });

  it('should not filter cities when the search term has less than 3 characters', async () => {
    await store.dispatch('cities/searchCities', 'sa');

    const searchResults = store.getters['cities/getSearchResults'];
    expect(searchResults).toEqual([]);
  });

  it('should update the state with the setSearchResults mutation', async () => {
    store.commit('cities/setSearchResults', ['san francisco', 'santiago']);

    const searchResults = store.getters['cities/getSearchResults'];
    expect(searchResults).toEqual(['san francisco', 'santiago']);
  });

  it('should return search results with the getSearchResults getter', async () => {
    await store.dispatch('cities/searchCities', 'sal');

    const searchResults = store.getters['cities/getSearchResults'];
    expect(searchResults).toEqual([
      'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito'
    ]);
  });
});
