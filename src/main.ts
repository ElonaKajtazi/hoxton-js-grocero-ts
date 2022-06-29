import "./reset.css";
import "./style.css";

// Deliverables
// - Create a new Vite project with npm create vite ✅
// - Follow the lecture's instructions to run all the code you need to make it work ✅
// - Make sure it runs on your machine, via http://localhost:3000 ✅
// - Migrate the necessary files into the new project ✅
// - Copy over the javascript, css and HTML code into the TS project ✅
// - Make sure the app behaves as before ✅

// Note
// Make sure that:
// 1.  you  keep the <script> inside of your HTML's body ✅
// 2. you keep the import './styles.css in your javascript file. (otherwise your app may break) ✅

// Bonus-ish?
// Start adding types to your code! 🎉

type StoreItem = {
  id: number;
  name: string;
  price: number;
  inCart: number;
  icon: string;
};
type State = {
  storeItems: StoreItem[];
};
let state: State = {
  storeItems: [
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      inCart: 3,
      icon: "assets/icons/001-beetroot.svg",
    },
    {
      id: 2,
      name: "carrot",
      price: 0.3,
      inCart: 0,
      icon: "assets/icons/002-carrot.svg",
    },
    {
      id: 3,
      name: "apple",
      price: 0.25,
      inCart: 0,
      icon: "assets/icons/003-apple.svg",
    },
    {
      id: 4,
      name: "apricot",
      price: 0.2,
      inCart: 0,
      icon: "assets/icons/004-apricot.svg",
    },
    {
      id: 5,
      name: "avocado",
      price: 0.85,
      inCart: 0,
      icon: "assets/icons/005-avocado.svg",
    },
    {
      id: 6,
      name: "banana",
      price: 0.55,
      inCart: 0,
      icon: "assets/icons/006-bananas.svg",
    },
    {
      id: 7,
      name: "bell pepper",
      price: 0.45,
      inCart: 0,
      icon: "assets/icons/007-bell-pepper.svg",
    },
    {
      id: 8,
      name: "berry",
      price: 0.4,
      inCart: 0,
      icon: "assets/icons/008-berry.svg",
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      inCart: 0,
      icon: "assets/icons/009-blueberry.svg",
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.3,
      inCart: 0,
      icon: "assets/icons/010-eggplant.svg",
    },
  ],
};
function getInCart() {
  return state.storeItems.filter((item) => item.inCart > 0);
}
function increaseItem(item: StoreItem) {
  return item.inCart++;
}
function decreaseItem(item: StoreItem) {
  return item.inCart--;
}
function total() {
  let total = 0;
  for (let item of state.storeItems) {
    total += item.price * item.inCart;
  }
  return total;
}

function renderStoreItems() {
  //Creating the elements
  let storeUl = document.querySelector(".item-list.store--item-list");
  storeUl.textContent = "";
  for (let item of state.storeItems) {
    let liEl = document.createElement("li");
    let divEl = document.createElement("div");
    divEl.className = "store--item-icon";
    let imgEl = document.createElement("img");
    imgEl.src = item.icon;
    let buttonEl = document.createElement("button");
    buttonEl.textContent = "Add to cart";
    buttonEl.addEventListener("click", () => {
      increaseItem(item);
      render();
    });
    //Appending the elements

    liEl.append(divEl, buttonEl);
    divEl.append(imgEl);
    let storeUl = document.querySelector(".item-list.store--item-list");
    storeUl.append(liEl);
  }
}

function renderCartItems() {
  let cartUl = document.querySelector(".item-list.cart--item-list");
  cartUl.textContent = "";
  let inCart = getInCart();
  for (let item of inCart) {
    let liCartEl = document.createElement("li");
    let imgCartEl = document.createElement("img");
    imgCartEl.className = "cart--item-icon";
    imgCartEl.src = item.icon;
    imgCartEl.alt = item.name;
    let pCartEl = document.createElement("p");
    pCartEl.textContent = item.name;
    let buttonCartEl = document.createElement("button");
    buttonCartEl.className = "quantity-btn remove-btn center";
    buttonCartEl.textContent = "-";
    buttonCartEl.addEventListener("click", () => {
      if (item.inCart > 0) {
        decreaseItem(item);
        render();
      } else render();
    });

    let spanCartEl = document.createElement("span");
    spanCartEl.className = "quantity-text center";
    spanCartEl.textContent = String(item.inCart);

    let buttonCartEl1 = document.createElement("button");
    buttonCartEl1.className = "quantity-btn add-btn center";
    buttonCartEl1.textContent = "+";
    buttonCartEl1.addEventListener("click", () => {
      increaseItem(item);
      render();
    });

    liCartEl.append(
      imgCartEl,
      pCartEl,
      buttonCartEl,
      spanCartEl,
      buttonCartEl1
    );
    let cartUl = document.querySelector(".item-list.cart--item-list");
    cartUl.append(liCartEl);
  }
}
function renderTotal() {
  let h3El = document.createElement("h3");
  h3El.textContent = "Total";
  let spanEl = document.createElement("span");
  let divEl1 = document.createElement("div");
  spanEl.className = "total-price";
  spanEl.textContent = String(total().toFixed(2));
  // <h3>Total</h3>

  // <span class="total-number">£0.00</span>
  let divEl = document.querySelector(".total-section");
  divEl.textContent = "";
  divEl1.append("£", spanEl);
  divEl.append(h3El, divEl1);
}

function render() {
  renderStoreItems();
  renderCartItems();
  renderTotal();
}

render();
