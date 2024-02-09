const logOut = document.querySelector("#logOut");

logOut.addEventListener("click", (e) => {
  e.preventDefault();
  Toastify({
    text: "Log-Out....",
    duration: 3000,
    close: true,
    backgroundColor: "green",
  }).showToast();
  setTimeout(() => {
    window.location.href = "login-reg.html";
  }, 1000);
});
