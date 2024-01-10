const banner = document.querySelector(".banner");
const siteUrl = " http://localhost:3000";
const card = document.querySelector(".card");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const newCard = document.querySelector(".newCard");
const shopCard = document.querySelector(".shopCard");
menu.addEventListener("click", (e) => (nav.style.display = "block"));

const getData = async (url) => {
  try {
    const res = await fetch(`${siteUrl}/${url}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const rendBanner = async () => {
  const data = await getData("banner");
  banner.innerHTML = data?.map(
    (item) =>
      `
<div >
<img class="banners" src="${item.url}">
</div>
`
  );
};
rendBanner();

const rendCard = async () => {
  const data = await getData("newProduct");
  card.innerHTML = data
    ?.map(
      (item) =>
        `
    <a class="card_content cursor-pointer" href="http://127.0.0.1:5500/src/about.html?name=${item.name}&id=${item.id}">
    <div class="card_img">
    <img src="${item.url}">
    <span class="card_sale">-25%</span>
    </div>
    <div class="card_price">
    <p class="card_nowPrice">${item.price}</p>
    <div class="oldPrice_box">
    <p class="card_oldPrice">${item.sale}</p>
    <img class="card_oldPrice_line" src="./img/Line.png">
    </div>
    </div>
    <p class="card_desc">${item.desc}</p>
    </a>
    `
    )
    .join("");
};
rendCard();

const rendNewProduct = async () => {
  const data = await getData("Products");

  newCard.innerHTML = data
    ?.map(
      (item) =>
        `
      <a class="newItem py-[11px] px-[10px] cursor-pointer " href="http://127.0.0.1:5501/src/about.html?name=${item.name}&id=${item.id}">
      <div class="mb-[19px]">
      <img src="${item.url}">
      </div>
      <p class="text-base font-medium mb-[5px]">${item.price}</p>
      <p class="text-xs font-large">${item.desc}</p>
      </a>
`
    )
    .join("");
};
rendNewProduct();

// reklama cardlar
const shopRend = async () => {
  const data = await getData("shop");
  shopCard.innerHTML=data.map((item)=>`
  
      <a href="#" class="shopCard_item">
      <div class="flex shopCard_item_logo">
      <img src=${item.logo} alt="logo">
      <img src=${item.text} alt="logo">
      </div>
      <div class="shopCard_item_imgs">
      <img src=${item.img[0]}>
      <img src=${item.img[1]}>
      <img src=${item.img[2]}>
      </div>
      </a>
  `).join("")
  
};
shopRend();












const counterCard = document.querySelector(".counterCard");
let products = JSON.parse(localStorage.getItem("card"));


const cardCounter = async (data) => {
  let countCard=document.querySelector(".countCard");
  try {
    counterCard.innerHTML = `
    <div class="flex flex-col text-center gap-[5px]">
      <div class="relative">
          <img class="w-[17px] h-[17px] ml-auto mr-auto" src="./img/karzina.svg" alt="like">
          <span class="countCard">${data}</span>
      </div>
        <p class="font-normal text-sm ">Корзина</p>
    </div>

  `;
  } catch (error) {}
};
cardCounter(products.length ? products.length:0);