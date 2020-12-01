import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    INIT_POSTS: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    async initPosts({ commit }) {
      let authors = await axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
      axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          const posts = res.data.map((post) => {
            const author = authors.find((author) => {
              return post.userId == author.id;
            });
            post.author = author.name;
            return post;
          });
          commit("INIT_POSTS", posts);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    getPosts(state) {
      return state.posts.sort(() => Math.random() - 0.5);
    },
  },
  modules: {},
});
