window.addEventListener("DOMContentLoaded", () => {
  // fetch elements
  const button = document.getElementById("button1");
  const title = document.getElementById("main-title");

  // functions
  function changeColor() {
    title.style.color = "blue";
  }
  function otherFunction() {
    title.style.color = "orange";
  }

  // event listeners
  button.addEventListener("click", otherFunction);

  // initial logic
  changeColor();
});
