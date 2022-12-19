import axios from "axios";
// import { useRoute } from "vue-router";
import Vuex from "vuex";

let store = new Vuex.Store({
  state: {
    movies: {},
    author: {},
    isPizzaActive: Boolean,
    pizzas: {},
    pizzasInCart: {},
    total: 0,
    searchData: "",
  },
  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = payload;
    },
    SET_AUTHOR: (state, payload) => {
      state.author = payload;
    },
    SET_PIZZA_ACTIVE: (state, payload) => {
      state.isPizzaActive = payload;
    },
    SET_PIZZAS: (state, payload) => {
      state.pizzas = payload;
    },
    SET_PIZZAS_IN_CART: (state, payload) => {
      state.pizzasInCart = payload;
    },
    ADD_PIZZA_IN_CART: (state, newPizza) => {
      state.pizzasInCart.push({
        name: newPizza.name,
        price: newPizza.price,
        qty: newPizza.qty,
        src: newPizza.src,
      });
    },
    CHANGE_QTY_PIZZA_IN_CART: (state, payload) => {
      const index = state.pizzasInCart.findIndex(
        (el) => el.name === payload.name
      );
      state.pizzasInCart[index].qty = payload.qty;
    },
    DELETE_PIZZA_FROM_CART: (state, payload) => {
      const index = state.pizzasInCart.findIndex(
        (el) => el.name === payload.name
      );
      state.pizzasInCart.splice(index, 1);
    },
    SET_TOTAL: (state, total) => {
      state.total = total;
    },
    SET_SEARCH: (state, payload) => {
      state.searchData = payload;
    },
  },
  actions: {
    ACT_PIZZA_ACTIVE({ commit }, data) {
      commit("SET_PIZZA_ACTIVE", data);
    },
    async GET_PIZZAS({ commit }) {
      try {
        const { data } = await axios.get(
          "https://6387a9cfd9b24b1be3f6e05d.mockapi.io/pizza"
        );

        commit("SET_PIZZAS", data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async GET_PIZZAS_IN_CART({ commit }) {
      try {
        const { data } = await axios.get(
          "https://6387a9cfd9b24b1be3f6e05d.mockapi.io/cart"
        );

        commit("SET_PIZZAS_IN_CART", data);
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    ACT_ADD_PIZZA_IN_CART({ commit }, item) {
      commit("ADD_PIZZA_IN_CART", item);
    },
    ACT_CHANGE_QTY_PIZZA_IN_CART({ commit }, item) {
      commit("CHANGE_QTY_PIZZA_IN_CART", item);
    },
    ACT_DELETE_PIZZA_FROM_CART({ commit }, item) {
      commit("DELETE_PIZZA_FROM_CART", item);
    },

    ACT_SET_TOTAL({ commit }, total) {
      commit("SET_TOTAL", total);
    },

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
    ACT_SEARCH({ commit }, data) {
      commit("SET_SEARCH", data);
    },
  },
});

export default store;
