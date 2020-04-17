axios({
  method: "get",
  url: "https://api.chucknorris.io/jokes/search",
  params: {
    query: "linux",
  },
})
  .then((response) => {
    // For testing
    // throw new Error("From then handler");
    console.log(response);
  })
  .catch((error) => {
    console.log("Something went wrong", error);
  });

const app = new Vue({
  el: "#app",
});
