const saveCartItems = (item) => {
  localStorage.setItem('cartItems', item);
/*   if (localStorage.getItem('cartItems')) {
    const newItemToStorage = `${localStorage.getItem('cartItems')}x|x|x${JSON.stringify(item)}`;
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', newItemToStorage);
  } else { localStorage.setItem('cartItems', JSON.stringify(item)); } */
};

  if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
