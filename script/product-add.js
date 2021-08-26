window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:8080/api/add",
      data: data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  });
});

function redirect() {
  window.location.href = "http://127.0.0.1:5500/products.html";
}
