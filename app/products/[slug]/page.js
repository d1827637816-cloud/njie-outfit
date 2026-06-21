'use client';

import { useMemo, useState } from 'react';
import { getProductBySlug } from '../../../lib/products';
import { useCart } from '../../../context/cart-context';

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

export default function ProductDetailPage({ params }) {
  const product = useMemo(() => getProductBySlug(params.slug), [params.slug]);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null);

  if (!product) {
    return (
      <main className="container section">
        <h1>Produk tidak ditemukan</h1>
        <p>Silakan kembali ke katalog dan pilih produk lain.</p>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedVariant.size}`,
      productId: product.id,
      name: product.name,
      variant: `${selectedVariant.color} / ${selectedVariant.size}`,
      price: product.salePrice,
      quantity: 1,
    });
  };

  return (
    <main className="container section">
      <div className="product-detail-grid">
        <div className="product-detail-gallery">
          <div className="product-detail-image"></div>
          <div className="product-detail-thumbs">
            {product.images.map((image, index) => (
              <div key={index} className="product-thumb"></div>
            ))}
          </div>
        </div>
        <div className="product-detail-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          <div className="product-meta-detail">
            <span className="price">{formatCurrency(product.salePrice)}</span>
            <span className="original-price">{formatCurrency(product.price)}</span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="variant-section">
            <p className="variant-title">Pilihan Ukuran</p>
            <div className="variant-grid">
              {product.variants.map((variant) => (
                <button
                  key={`${variant.color}-${variant.size}`}
                  className={`variant-btn ${selectedVariant?.size === variant.size ? 'active' : ''}`}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </main>
  );
}
