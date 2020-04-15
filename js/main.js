const app = new Vue({
  el: "#app",
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    onSubmit() {
      NProgress.start();
      axios({
        method: "get",
        url: "https://api.github.com/search/repositories",
        params: {
          q: this.searchQuery,
        },
      })
        .then((results) => {
          this.searchResults = results.data.items;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          NProgress.done();
        });
    },
  },
});
