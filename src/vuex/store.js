import axios from "axios";
import Vuex from "vuex";

let store = new Vuex.Store({
  state: {
    movies: {},
    author: {},
  },
  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = payload;
    },
    SET_AUTHOR: (state, payload) => {
      state.author = payload;
    },
  },
  actions: {
    async GET_MOVIES({ commit }) {
      try {
        const { data } = await axios.get(
          "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=Qv3Uw8MK4moKsVcaupYp3sRHa7QuXmtl"
        );
        commit("SET_MOVIES", data.results);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    // axios.get(`${API_BASE_URL}/api/products`    Использование шаблонной строки
    async GET_AUTHOR({ commit }) {
      // const searchName = localStorage.searchData;
      try {
        const { data } = await axios.get(
          "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=scott&api-key=Qv3Uw8MK4moKsVcaupYp3sRHa7QuXmtl"
        );
        commit("SET_AUTHOR", data.results);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  getters: {},
});

export default store;
