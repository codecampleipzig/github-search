axios({
  method: "get",
  url: "https://api.chucknorris.com/jokes/search",
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
