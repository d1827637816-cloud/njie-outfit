'use client';

import { useCart } from '../../context/cart-context';
import { products } from '../../lib/products';

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

export default function ProductsPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const variant = product.variants[0];
    addToCart({
      id: product.id,
      productId: product.id,
      name: product.name,
      variant: `${variant.color} / ${variant.size}`,
      price: product.salePrice,
      quantity: 1,
    });
  };

  return (
    <main>
      <section className="section">
        <div className="container section-header">
          <div>
            <span className="eyebrow">Katalog Produk</span>
            <h2>Temukan koleksi fashion pilihan</h2>
          </div>
        </div>

        <div className="grid grid-4">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image"></div>
              <div className="product-body">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="product-meta">
                  {formatCurrency(product.salePrice)}
                  <span className="product-discount">- {Math.round(((product.price - product.salePrice) / product.price) * 100)}%</span>
                </div>
                <div className="product-actions">
                  <a className="btn btn-outline" href={`/products/${product.slug}`}>
                    Lihat Detail
                  </a>
                  <button type="button" className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
