const product_imgBox = document.querySelector(".product_imgBox");
const product_contentBox = document.querySelector(".product_contentBox");
const product_content_img = document.querySelector(".product_content_img");
const product_contentBox_img = document.querySelector(
  ".product_contentBox_img"
);
const product_Productsizes = document.querySelector(".product_Productsizes");
const product_sizeBox = document.querySelector(".product_sizeBox");
const product_sizeText = document.querySelector(".product_sizeText");
const product_btnBox = document.querySelector(".product_btnBox");
const siteUrl = " http://localhost:3000";
const countCard = document.querySelector(".countCard");
const product_place = document.querySelector(".product_place");

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let urlname = params.get(`name`);
// console.log(urlname);
const rendProduct = async () => {
  try {
    const res = await fetch(`${siteUrl}/${urlname}/${id} `);
    const data = await res.json();
    product_imgBox.innerHTML = `
            <img class="product_img" src="${data.url}" alt="product">
            `;
    product_content_img.innerHTML += data?.img
      .map((i) => `<img class="w-[90px] h-[90px]" src=${i} />`)
      .join("");

    product_contentBox.innerHTML = `
            <h2 class="product_title mb-[12px]">${data.desc}</h2>
          <div class="flex justify-between mb-[21px]">
            <div class="flex gap-[10px] items-middle whitespace-nowrap ">
            <img src="/src/img/star.svg" >
            <p class="font-normal text-sm whitespace-nowrap ">14 отзывов</p>
            </div>
            <div class="flex gap-[5px] items-middle">
                 <img src="/src/img/likeIcon.svg" >
                 <p class="font-light  text-sm">В избранном</p>
            </div>
            <div class="flex gap-[5px]">
                <p class="font-light text-sm">В наличии:</p>
                <p class="font-normal text-sm">${data.count}</p>
             </div>
        </div>
        <div class="flex gap-[23px] items-center mb-[10px]">
            <h3 class="text-red text-3xl font-medium">${data.price}</h3>
             <div class="relative">
                <p class="text-2xl font-normal text-grey">${
                  data.sale ? data.sale : ""
                }</p>
                 <img class="w-[80px] absolute top-[8px] left-0 right-0 " src="/src/img/Line.png">
             </div>
        </div>
        <p class="font-light text-xs mb-[30px]">1799 ₽ при покупке от 10 шт *</p>
       <div class="flex gap-[5px] mb-[13px] items-center">
        <p class="font-nomal text-sm">Цвет:</p>
        <p class="font-light text-xs">${data.type ? data.type : " "}</p>
        </div>

            `;
    product_contentBox_img.innerHTML = data.imgType
      .map(
        (i) =>
          `
                <img class="w-[54px] h-[54px]" src=${i} alt="img">
            `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};
rendProduct();

const rendSize = async () => {
  try {
    const res = await fetch(`${siteUrl}/${urlname}/${id} `);
    data = await res.json();
    product_Productsizes.innerHTML = `
    <p class="font-nomal text-sm">Размер:</p>
    <p class="ssizeText font-light text-xs">L</p>
    `;
    product_sizeBox.innerHTML = ` 
 <p class="textSizee font-ligth text-xs rounded px-[10px] py-[10px] border-[1px] border-solid border-black" data-name="${
   data.size[0]
 }">${data.size[0] ? data.size[0] : ""}</p>
 <p class="textSizee font-ligth text-xs rounded px-[10px] py-[10px] border-[1px] border-solid border-black" data-name="${
   data.size[1]
 }">${data.size[1] ? data.size[1] : ""}</p>
 <p class="textSizee font-ligth text-xs rounded px-[10px] py-[10px] border-[1px] border-solid border-black" data-name="${
   data.size[2]
 }">${data.size[2] ? data.size[2] : ""}</p>
 <p class="textSizee font-ligth text-xs rounded px-[10px] py-[10px] border-[1px] border-solid border-black" data-name="${
   data.size[3]
 }">${data.size[3] ? data.size[3] : ""}</p>
 <p class="textSizee font-ligth text-xs rounded px-[10px] py-[10px] border-[1px] border-solid border-black" data-name="${
   data.size[4]
 }">${data.size[4] ? data.size[4] : ""}</p>
  
 `;
  } catch (error) {}
};
rendSize();

// ///////////////////////////////


//Sizeni rend qlw

product_sizeBox.addEventListener("click", (e) => {
  const ssizeText = document.querySelector(".ssizeText");
  let size = e.target.dataset.name;
  ssizeText.textContent = size;
  console.log(ssizeText);
});
rendSize();

//////////////////////////
let data;
const rendCount = async () => {
  try {
    const res = await fetch(`${siteUrl}/${urlname}/${id} `);
    data = await res.json();

    product_btnBox.innerHTML = `
                <div class="product_countBox">
                <button class="btn_text" id="inc"> > </button>
                <p class="product_cont">1</p>
                <button class="btn_text2" id="dec"> > </button>
                </div>
                <div>
                <button class="nowBtn" data-card="${data.id}">Купить сейчас</button>
                <button class="pushBtn font-medium text-sm px-[12px] py-[32px]"data-push="${data.id}" >Добавить в корзину</button>
                </div>
                `;
    product_place.innerHTML = `
    <div>
    <div>
    <div class="flex gap-[5px] items-center mb-[9px]">
    <p class="text-sm font-normal">Ваш регион:</p>
    <p class="font-normal text-xs">Москва</p>
    </div>
    <div class="productTitle_box flex gap-[5px] items-center ">
    <p class="text-sm font-normal">Расчётное время доставки:</p>
    <p class="font-normal text-xs">17 февраля</p>
    </div>
    <div class="product_Textboxs flex gap-[5px]">
    <p class="text-sm font-normal">О товаре:</p>
    <p class="font-normal text-xs">купили более  <span class="text-sm font-normal">100</span> раз</p>
    </div>
    <div class="pruductBtn_box ">
    <a class="product_character">Характеристики</a>
    <a class="product_character ">Описание</a>
    <a class="product_character ">Отзывы</a>
    </div>
    </div>



    <div class="productCards_box flex bg-blue items-center pl-4 pb-3">
    <div class="img_Box">
    <img src="./img/OfficialPertner_Icon.png" >
    </div>
    <h3 class="productCards_box_title">Marple Store </h3>
   
    <div  >
    <div class="flex w-[45px] ml-auto mr-auto ">
    <p class="text-base font-normal ">4.9</p>
    <img src="./img/starOne.svg" >
    </div>
    <p class="text-base font-normal ">Рейтинг магазина</p>
    </div>

    <div class="flex flex-col text-center">
    <div class="ml-auto mr-auto">
    <img  src="./img/chatIcon.svg" >
    </div>
    <p class="text-base font-normal ">Написать продавцу</p>
    </div>
    </div>


    <div class="product_localBox ">

    <div class="product_localBox_content">
    <img src="./img/box.svg">
    <p class="font-light text-sm ">Доставка до дверей</p>
    </div>

    <div class="product_localBox_content">
    <img src="./img/shield.svg">
    <p class="font-light text-sm">Гарантия возврата</p>
    </div>

    <div class="product_localBox_content">
    <img src="./img/creditCard.svg">
    <p class="font-light text-sm ">Оплата Online</p>
    </div>

</div>

    `;
  } catch (error) {}
};


let d = 1,
  s = 0;

//karzinka countini o'zgartirish
const cardCounter =  (data) => {
  let counterCard=document.querySelector(".counterCard");
  // try {
    console.log(data);
    counterCard.innerHTML = `
    <div class="flex flex-col text-center gap-[5px]">
      <div class="relative">
          <img class="w-[17px] h-[17px] ml-auto mr-auto" src="./img/karzina.svg" alt="like">
          <span class="countCard">${data}</span>
      </div>
        <p class="font-normal text-sm ">Корзина</p>
    </div>

  `;
  // } catch (error) {}
};

let bjhb = JSON.parse(localStorage.getItem("card"));
cardCounter(bjhb.length ? bjhb.length:0);
// carzinka card function

/////
product_btnBox.addEventListener("click", (e) => {
  let products = JSON.parse(localStorage.getItem("card"));
  let product_cont = document.querySelector(".product_cont");
  let oldProducts = products ? products : [];
  // countCard.textContent = products ? products.length : "";
  let id = e.target.id;
  let idCard = e.target.dataset.card;
  let idPush = e.target.dataset.push;
  let el = oldProducts.find((item) => item.id === data.id);
  if (d > 0 && id == "inc") {
    d--;
    product_cont.textContent = d;
    console.log(d);
  }
  if (id == "dec"&& d<=data.count) {
    d++;
    console.log(d);
    product_cont.textContent = d;
  }
  if (idCard) {
    s++;
    if (!el) {
      let newProduct = {
        ...data,
        userPrice: data.price,
        userCount: 1,
      };
      // countCard.textContent = newProduct.userCount;
      oldProducts.push(newProduct);
      localStorage.setItem("card", JSON.stringify(oldProducts));
    } else {
      el.userCount += 1;
      el.userPrice = el.userCount * el.price;
    }
  }
  if (idPush) {
    s++;
    if (!el) {
      let newProduct = {
        ...data,
        userPrice: product.price,
        userCount: 1,
      };
      console.log(el);
      countCard.textContent = newProduct.userCount;
      oldProducts.push(newProduct);
      
      localStorage.setItem("card", JSON.stringify(oldProducts));

    } else {
      el.userCount += 1;
      el.userPrice = el.userCount * el.price;
    }
  }
  let bjhb = JSON.parse(localStorage.getItem("card"));
  cardCounter(bjhb.length ? bjhb.length:0);
});
rendCount();
