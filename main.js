
let shop = document.getElementById("shop")

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

let basket = []

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        return `
        <div id="product-id-${x.id}" class="item">
                <img width="220" height="220" src="./${x.img}" alt="casual shirt">
                <div class="details">
                    <h3>${x.name}</h3>
                    <p>${x.desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${x.price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                            <div id=${x.id} class="quantity">0</div>
                            <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>    
            </div>
        `
    }).join(""))
}

generateShop()

let increment = (id) => {
    let selected = id

    let present = basket.find((i) => i.id === selected.id )
    
    if(present === undefined) {
        basket.push({
            id:selected.id, 
            item:1
        })
    } else {
        present.item += 1
    }

    console.log(basket);
    update(present)
}

let decrement = (id) => {
    let selected = id
    let present = basket.find((i) => i.id === selected.id )
    
    // if(present === undefined) {
    //     basket.push({
    //         id:selected.id, 
    //         item:1
    //     })
    // } else if(present.item > 0){
    //     present.item -= 1
    // } 
    
    present.item === 0 ? present.item : present.item--

    console.log(basket);
    update(present)
}
let update = (x) => {
    let item = document.getElementById(`${x.id}`)

    item.innerHTML = x.item
}
