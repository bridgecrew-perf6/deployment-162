import axios from "axios";

const state = () => ({
  berita: [],
  error: "",
  source: [],
});
const mutations = {
  setNews(state, param) {
    state.berita = param;
  },
  setError(state, param) {
    state.error = param;
  },
  setSource(state, param) {
    state.source = param;
  },
};
const actions = {
  fetchNews(store) {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=6cd6ecc6a9a84b93b591f37092b64f0b"
      )
      .then((response) => {
        store.commit("setNews", response.data.articles);
      })
      .catch((error) => {
        store.commit("setError", error);
      });
  },
  getSource(store) {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=6cd6ecc6a9a84b93b591f37092b64f0b"
      )
      .then((response) => {
        store.commit("setSource", response.data.sources);
      })
      .catch((error) => {
        store.commit("setError", error);
      });
  },
  getBySource(store, source) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=6cd6ecc6a9a84b93b591f37092b64f0b`
      )
      .then((response) => {
        store.commit("setNews", response.data.articles);
      })
      .catch((error) => {
        store.commit("setError", error);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
