const form = document.getElementById("signup-form");
const formErr = document.querySelector("#signup-form #error");
function onSubmit(e) {
  e.preventDefault();
  const { pwd, cpwd } = e.target;
  if (pwd.value !== cpwd.value) {
    showError("passwords didnot match", cpwd);
    return
  }
  formErr.innerText = '';
  pwd.classList.remove("error");
  cpwd.classList.remove("error");
}
form.addEventListener("submit", onSubmit);
function showError(err, el) {
  formErr.innerText = err;
  el.classList.add("error");
}
