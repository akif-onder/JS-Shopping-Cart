
//let shop = document.getElementById("shop")

let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/casual_shirt.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/mens_suit.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/office_shirt.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/tshirt.jpg",
    },
  ];

// let basket = JSON.parse(localStorage.getItem("data")) || [];

// let generateShop = () => {
//      return (shop.innerHTML = shopItemsData.map((x) => {

//         let search = basket.find((e) => e.id === id) || []

//         return `
//         <div id="product-id-${x.id}" class="item">
//                 <img width="220" height="220" src="./${x.img}" alt="casual shirt">
//                 <div class="details">
//                     <h3>${x.name}</h3>
//                     <p>${x.desc}</p>
//                     <div class="price-quantity">
//                         <h2>$ ${x.price}</h2>
//                         <div class="buttons">
//                             <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
//                             <div id=${x.id} class="quantity">
//                             ${search.item === undefined? 0: search.item}
//                             </div>
//                             <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
//                         </div>
//                     </div>
//                 </div>    
//             </div>
//         `
//     }).join(""))
// }

// generateShop()

// let increment = (id) => {
//     let selectedItem = id

//     let present = basket.find((i) => i.id === selectedItem.id )
    
//     if(present === undefined) {
//         basket.push({
//             id:selectedItem.id, 
//             item:1
//         })
//     } else {
//         present.item += 1
//     }

//     localStorage.setItem("data", JSON.stringify(basket))
//     //console.log(basket);
//     update(selectedItem.id)
// }

// let decrement = (id) => {
//     let selectedItem = id
//     let present = basket.find((i) => i.id === selectedItem.id )
    
//     if(present === undefined) {
//         basket.push({
//             id:selectedItem.id, 
//             item:1
//         })
//     } else if(present.item > 0){
//         present.item -= 1
//     } 
    
    //present.item === 0 ? present.item : present.item--

    //console.log(basket);
//     localStorage.setItem("data", JSON.stringify(basket))
//     update(selectedItem.id)
// }
// let update = (id) => {
//     let search = basket.find((x) => x.id === id )
    //console.log(search.item);
//     document.getElementById(id).innerHTML = search.item
//     calculate(search.item)
    
// }

// let calculate = (i) => {
//     let cartIcon = document.getElementById("cartAmount")
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((a,b) => a + b)
// }

// calculate()

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img width="220" height="220"src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();