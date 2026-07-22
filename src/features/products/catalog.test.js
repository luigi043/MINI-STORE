import { describe, expect, it } from 'vitest';
import { filterProducts, getCatalogProducts, sortProducts } from './catalog';

const products = [
  { id: 1, name: 'Alpha Tee', description: 'Organic cotton', category: 'clothing', price: 20, rating: 4.2, reviews: 8, inStock: true },
  { id: 2, name: 'Bravo Speaker', description: 'Portable audio', category: 'electronics', price: 80, rating: 4.8, reviews: 3, inStock: false },
  { id: 3, name: 'Charlie Mug', description: 'Ceramic coffee mug', category: 'home', price: 30, rating: 4.5, reviews: 10, inStock: true },
];

describe('catalog utilities', () => {
  it('combines category, price, availability, rating, and text filters', () => {
    expect(filterProducts(products, { category: 'home', minPrice: 20, maxPrice: 35, search: 'COFFEE', showOutOfStock: false, minRating: 4.5 })).toEqual([products[2]]);
  });

  it('sorts a copy without mutating the source collection', () => {
    expect(sortProducts(products, 'price-desc').map(({ id }) => id)).toEqual([2, 3, 1]);
    expect(products.map(({ id }) => id)).toEqual([1, 2, 3]);
  });

  it('applies the selected sort after filtering', () => {
    expect(getCatalogProducts(products, { maxPrice: 50, sort: 'name' }).map(({ id }) => id)).toEqual([1, 3]);
  });
});
