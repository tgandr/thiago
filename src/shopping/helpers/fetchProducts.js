const fetchProducts = async (search) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;
  try {
    const response = await fetch(url);
    const object = await response.json();
    return object;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
