const normalizeSearch = (value = '') => value.trim().toLocaleLowerCase();

export const filterProducts = (products, filters = {}) => {
  const {
    category = 'all',
    minPrice = 0,
    maxPrice = Number.POSITIVE_INFINITY,
    search = '',
    showOutOfStock = true,
    minRating = 0,
  } = filters;
  const normalizedSearch = normalizeSearch(search);

  return products.filter((product) => {
    const searchableText = `${product.name} ${product.description ?? ''}`.toLocaleLowerCase();

    return (
      (category === 'all' || product.category === category) &&
      product.price >= minPrice &&
      product.price <= maxPrice &&
      (showOutOfStock || product.inStock) &&
      product.rating >= minRating &&
      (!normalizedSearch || searchableText.includes(normalizedSearch))
    );
  });
};

export const sortProducts = (products, sort = 'default') => {
  const sortedProducts = [...products];

  switch (sort) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'reviews':
      return sortedProducts.sort((a, b) => b.reviews - a.reviews);
    default:
      return sortedProducts;
  }
};

export const getCatalogProducts = (products, filters = {}) =>
  sortProducts(filterProducts(products, filters), filters.sort);
