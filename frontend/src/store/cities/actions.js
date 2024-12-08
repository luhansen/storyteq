export default {
  searchCities({ state, commit }, query) {
    let results = []
    if(query.length >= 3) {
      results = state.cities.filter(city =>
        city.toLowerCase().includes(query.toLowerCase())
      );
    }
    commit('setSearchResults', results);
  },
};