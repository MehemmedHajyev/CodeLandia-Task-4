

let animaleShop = [
    {
      id: 1,
      name: "lorem",
      img: "https://i.pinimg.com/564x/7e/26/1c/7e261c08ce9176cb7110e9c59a7498f9.jpg",
      price: 50,
      flt: "Cat",
    },
    {
      id: 2,
      name: "lorem",
      img: "https://i.pinimg.com/564x/fb/63/19/fb631922a2a165f97ec7d6a26a3f85f8.jpg",
      price: 59,
      flt: "Cat",
    },
    {
      id: 3,
      name: "lorem",
      img: "https://i.pinimg.com/564x/6c/c8/1c/6cc81ce33f67bc73c306daf4fa7fe0a7.jpg",
      price: 48,
      flt: "Cat",
    },
    {
      id: 4,
      name: "lorem",
      img: "https://i.pinimg.com/564x/81/a2/0b/81a20b63af641003c44dd814530990b5.jpg",
      price: 70,
      flt: "Cat",
    },
    {
      id: 5,
      name: "lorem",
      img: "https://i.pinimg.com/564x/a6/fb/ed/a6fbed7bc5e5c1b8aeb08e36e60a2d75.jpg",
      price: 70,
      flt: "Dog",
    },
    {
      id: 6,
      name: "lorem",
      img: "https://i.pinimg.com/564x/44/14/de/4414ded02bf517a80893c049c20bcea4.jpg",
      price: 70,
      flt: "Dog",
    },
    {
      id: 7,
      name: "lorem",
      img: "https://i.pinimg.com/564x/38/62/e8/3862e8f0c0b60c600026e2fa63a0159c.jpg",
      price: 70,
      flt: "Dog",
    },
    {
      id: 8,
      name: "lorem",
      img: "https://i.pinimg.com/564x/a6/fb/ed/a6fbed7bc5e5c1b8aeb08e36e60a2d75.jpg",
      price: 70,
      flt: "Dog",
    },
  ];
  
  const addButton = document.querySelector("#add-button");
  const gridContainer = document.querySelector(".grid-container");
  
  animaleShop.forEach((data) => {
    gridContainer.innerHTML += `
    <div class="grid-card  p-3 mb-5 bg-white">
    <img src="${data.img}"  alt="" />
      <div class="grid-card-content text-center">
     <h1 class="h3 mt-2">${data.name}</h1>
     <p class="mt-2" >Lorem, ipsum.</p>
      <button class="w-100 bg-body  text-center d-flex justify-content-center align-items-center border-0 rounded-2 p-1" >
          <img src="asest/images/shop.gif" alt="">
    </button>
  </div>
  </div>
    
    `;
  });
  addButton.addEventListener("click", () => {});
  