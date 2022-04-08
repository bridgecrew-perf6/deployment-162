import Vue from "vue";
import Vuex from "vuex";
import pokemon from "@/store/pokemon";
import news from "@/store/news";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon: {
      namespaced: true,
      ...pokemon,
    },
    news: {
      namespaced: true,
      ...news,
    },
  },
});
