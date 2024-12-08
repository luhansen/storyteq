export default {
  searchBooks({ state, commit }, query) {
    let results = []
    if(query.length >= 3) {
        results = state.books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
      ).map(book => `${book.title} - ${book.author}`);
    }
    commit('setSearchResults', results);
  },
};
