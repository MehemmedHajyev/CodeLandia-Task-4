const api = [
  {
    name: "Mehemmed@gmail.com",
    password: "123",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    if (!email.trim() || !password.trim()) {
      Toastify({
        text: "Lütfen e-posta ve şifreyi boş bırakmayın.",
        duration: 3000,
        close: true,
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
      }).showToast();
      return;
    }

    const user = api.find(
      (user) => user.name === email && user.password === password
    );

    if (user) {
      Toastify({
        text: "Giriş başarılı! Yönlendiriliyorsunuz...",
        duration: 3000,
        close: true,
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    } else {
      Toastify({
        text: "Giriş başarısız! Lütfen geçerli bir e-posta ve şifre girin.",
        duration: 3000,
        close: true,
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
      }).showToast();
    }
  };

  form.addEventListener("submit", handleSubmit);
});

window.addEventListener("load", () => {
  email = "";
  password = "";
});
