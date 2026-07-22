import { products } from '../../data/products';
import { getCatalogProducts } from './catalog';

const delay = (duration, signal) =>
  new Promise((resolve, reject) => {
    if (!duration) {
      resolve();
      return;
    }

    const timeout = window.setTimeout(resolve, duration);
    signal?.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timeout);
        reject(new DOMException('The product request was cancelled.', 'AbortError'));
      },
      { once: true },
    );
  });

const simulateFailure = () =>
  import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCK_API_ERROR === 'true';

const requestDelay = import.meta.env.DEV ? 250 : 0;

export const productService = {
  async getProducts(filters, { signal } = {}) {
    await delay(requestDelay, signal);

    if (simulateFailure()) {
      throw new Error('The development product service is unavailable. Please try again.');
    }

    const data = getCatalogProducts(products, filters);
    return { data, total: products.length };
  },

  async getProductById(id, { signal } = {}) {
    await delay(requestDelay, signal);

    if (simulateFailure()) {
      throw new Error('The development product service is unavailable. Please try again.');
    }

    const data = products.find((product) => product.id === Number(id)) ?? null;
    const related = data
      ? products
          .filter((product) => product.category === data.category && product.id !== data.id)
          .slice(0, 3)
      : [];

    return { data, related };
  },
};
