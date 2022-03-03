const cartItems1 = '.cart__items';
let sumPar2 = 0;

function createProductImageElement(imageSource) {
  const url = imageSource.split('I.');
  const urlBetter = `${url[0]}J.jpg`;
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = urlBetter;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image, price: salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price1', 'R$ '));
  section.appendChild(createCustomElement('span', 'item__price2', salePrice.toFixed(2)
  .replace('.', ',')));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function loading() {
  const messageLoadingCont = document.querySelector('.items');
  const messageLoading = document.createElement('div');
  messageLoading.innerText = 'carregando...';
  messageLoading.className = 'loading';
  messageLoadingCont.appendChild(messageLoading);
}

function loadingRemove() {
  const messageLoadingCont = document.querySelector('.items');
  while (messageLoadingCont.firstChild) {
    messageLoadingCont.removeChild(messageLoadingCont.firstChild);
  } 
}

async function listFunc() {
  const list = await fetchProducts('computador');
  loadingRemove();
  list.results.forEach((item) => {
    const newItem = createProductItemElement(item);
    const renderItem = document.querySelector('.items');
    renderItem.appendChild(newItem);
  });
} 

function renderSum(value) {
  const total = document.createElement('div');
  const renderItem = document.querySelector('.total-price');
  if (localStorage.getItem('cartItems') !== null && localStorage.getItem('cartItems') !== '') {
    // total.innerText = `${value}`;
    total.innerText = `${value.toLocaleString('pt-BR', 
    { style: 'currency', currency: 'BRL' })}`;
    renderItem.removeChild(renderItem.firstChild);
    renderItem.appendChild(total);
  } else {
    total.innerText = ' R$ 0,00';
    renderItem.removeChild(renderItem.firstChild);
    renderItem.appendChild(total);
  }
  localStorage.setItem('subtotal', value);
}

async function sum(sku) {
  if (localStorage.getItem('cartItems') !== null) {
    try {
      const obj = await fetchItem(sku);
      sumPar2 += obj.price;
      renderSum(sumPar2);
    } catch (error) { throw error.message; }
  }
}

async function sumDown(value) {
  let price = await fetchItem(value);
  price = price.price;
  sumPar2 -= price;
  renderSum(sumPar2);
}

function storage() {
  const list = document.querySelector(cartItems1);
  let listArr = [];
  for (let i = 0; i < list.children.length; i += 1) {
    listArr.push(list.children[i].firstChild.innerText);
  }
  listArr = listArr.toString();
  saveCartItems(listArr);
}

function cartItemClickListener(event) {
  const removeItem = event.target.parentNode;
  for (let i = 0; i < removeItem.children.length; i += 1) {
    if (removeItem.children[i].innerText === event.target.innerText) {
      const excludeitem = removeItem.children[i].parentNode.parentNode;
      excludeitem.removeChild(removeItem.children[i].parentNode);
      sumDown(event.target.parentNode.children[0].innerText);
      storage();
      break;
    }
  }
}

function createCartImageElement(imageSource) {
  const url = imageSource;
  const img = document.createElement('img');
  img.className = 'item__imageCart';
  img.src = url;
  return img;
}

function createCartItemElement({ id: sku, title: name, price: salePrice, thumbnail: image }) {
  const section = document.createElement('div');
  const li = document.createElement('li');
  const exclude = document.createElement('i');
  section.className = 'boxCart';
  li.className = 'cart__item';
  li.innerText = `${name}\n\n${salePrice.toLocaleString('pt-BR', 
  { style: 'currency', currency: 'BRL' })}`;
  exclude.className = 'fa-solid fa-trash-can excludeitem';
  exclude.addEventListener('click', cartItemClickListener);
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCartImageElement(image));
  section.appendChild(li);
  section.appendChild(exclude);
  return section;
}

function putItemInCart(object) {
  const newItemInCart = createCartItemElement(object);
  const renderItem = document.querySelector(cartItems1);
  renderItem.appendChild(newItemInCart);
}

function getItem() {
  let sku;
  document.addEventListener('click', async (event) => {
    if (event.target.className === 'item__add') {
      sku = event.target.parentNode.firstChild.innerText;
      const item = await fetchItem(sku);
      putItemInCart(item);
      storage();
      await sum(sku);
    }
  });
}

function refreshCart() {
  let storageList = getSavedCartItems();
  if (storageList !== null) {
    storageList = storageList.split(',');
    console.log(storageList);
    storageList.forEach(async (elem) => {
      const consult = await fetchItem(elem);
      putItemInCart(consult);
    });
    sumPar2 = parseFloat(localStorage.getItem('subtotal'));
    renderSum(sumPar2);
  }
}

function toEmptyCart() {
  const btn = document.querySelector('.empty-cart');
  btn.addEventListener('click', () => {
    const list = document.querySelector(cartItems1);
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    saveCartItems('');
    sumPar2 = 0;
    renderSum(sumPar2);
  });
}

window.onload = () => {
  loading();
  listFunc();
  getItem();
  refreshCart();
  toEmptyCart();
};
