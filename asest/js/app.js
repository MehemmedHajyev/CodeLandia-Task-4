let logPage = document.querySelector(".login-page");
let loginBtn = document.querySelector(".loginBtn");

let persons = [
  {
    id: 1,
    name: "mehemmed",
    surname: "hajyeff",
    email: "mehemmed@gmail.com",
    passvord: "mm",
  },
];

loginBtn?.addEventListener("click", (e) => {
  e.preventDefault();

  let enteredEmail = document.querySelector(".login-email").value;
  let enteredPassword = document.querySelector(".login-pasvord").value;

  if (enteredEmail !== "" && enteredPassword !== "") {
    let user = persons.find((person) => person.email === enteredEmail);
    if (user) {
      if (user.passvord === enteredPassword) {
        Toastify({
          text: "Giriş başarılı! Yönlendiriliyorsunuz...",
          duration: 3000,
          close: true,
          backgroundColor: "green",
        }).showToast();
        // Burada yönlendirme yapılabilir
        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      } else {
        Toastify({
          text: "Giriş başarısız! Lütfen geçerli bir şifre girin.",
          duration: 3000,
          close: true,
          backgroundColor: "#e74c3c",
        }).showToast();
      }
    } else {
      Toastify({
        text: "Giriş başarısız! Bu e-posta ile kayıtlı bir kullanıcı bulunamadı.",
        duration: 3000,
        close: true,
        backgroundColor: "red",
      }).showToast();
    }
  } else {
    Toastify({
      text: "Lütfen e-posta ve şifreyi boş bırakmayın.",
      duration: 3000,
      close: true,
      backgroundColor: "red",
    }).showToast();
  }
});

const goRegister = document.querySelector(".go-register");
const registerPage = document.querySelector(".register-page ");

goRegister?.addEventListener("click", (e) => {
  e.preventDefault();
  registerPage.style = "display:block";
  logPage.style = "display:none";
});

const registerBtn = document.querySelector("#register-btn");
const regName = document.querySelector(".reg-name");
const regEmail = document.querySelector(".reg-email");
const regPasvord = document.querySelector(".reg-pasvord");
registerBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    regName.value !== "" &&
    regEmail.value !== "" &&
    regPasvord.value !== ""
  ) {
    let newUser = persons.find((data) => data.email === regEmail.value);
    if (newUser) {
      Toastify({
        text: "Istifadeçi movcutdur",
        duration: 3000,
        close: true,
        backgroundColor: "green",
      }).showToast();
    } else {
      const createNewUser = {
        id: persons.length + 1,
        name: regName.value,
        email: regEmail.value,
        password: regPasvord.value,
      };
      persons.push(createNewUser);
      localStorage.setItem("user", JSON.stringify(persons));
      Toastify({
        text: "Qeydiyyat Uğurla Tamamlandi......",
        duration: 3000,
        close: true,
        backgroundColor: "green",
      }).showToast();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    }
  } else {
    Toastify({
      text: "Xahiş edirik bütün sahələri doldurun",
      duration: 3000,
      close: true,
      backgroundColor: "red",
    }).showToast();
  }
});



// window?.addEventListener("load", () => {
//   if (localStorage.getItem("user")) {
//     persons = JSON.parse(localStorage.getItem("user"));
//   }
//   enteredEmail && enteredEmail.value === "";
//   enteredPassword.value == "";
//   regName.value == "";
//   regEmail.value == "";
//   regPasvord.value == "";
// });
