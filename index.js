let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", () => {
  let body = document.querySelector("body");

  body.classList.toggle("darkmode");
});
