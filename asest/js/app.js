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
  {
    id: 2,
    name: "mansur",
    surname: "isa",
    email: "mansur@gmail.com",
    passvord: "12",
  },
  {
    id: 3,
    name: "adem",
    surname: "orucov",
    email: "adem@gmail.com",
    passvord: "22",
  },
];

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  let enteredEmail = document.querySelector(".login-email").value;
  let enteredPassword = document.querySelector(".login-pasvord").value;
  
  if (enteredEmail !== "" && enteredPassword !== "") {
    let user = persons.find(person => person.email === enteredEmail);
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
        backgroundColor: "#e74c3c",
      }).showToast();
    }
  } else {
    Toastify({
      text: "Lütfen e-posta ve şifreyi boş bırakmayın.",
      duration: 3000,
      close: true,
      backgroundColor: "#f1c40f",
    }).showToast();
  }
});
