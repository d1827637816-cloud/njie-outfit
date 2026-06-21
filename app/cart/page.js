'use client';

import { useCart } from '../../context/cart-context';

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

export default function CartPage() {
  const { cart, loading, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 15000 : 0;
  const total = subtotal + shipping;

  return (
    <main className="container section">
      <div className="section-header">
        <div>
          <span className="eyebrow">Keranjang Belanja</span>
          <h2>Review item Anda</h2>
        </div>
      </div>

      {loading ? (
        <p>Memuat cart...</p>
      ) : (
        <div className="cart-grid">
          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Keranjangmu kosong.</p>
            ) : (
              cart.map((item) => (
                <article key={item.id} className="cart-item">
                  <div className="cart-item-image"></div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="product-category">{item.variant}</p>
                    <p className="product-meta">{formatCurrency(item.price)}</p>
                    <div className="cart-actions">
                      <button
                        className="variant-btn"
                        type="button"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="variant-btn"
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button className="btn btn-outline" type="button" onClick={() => removeFromCart(item.id)}>
                        Hapus
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
          <aside className="cart-summary">
            <div className="summary-card">
              <h3>Ringkasan Pesanan</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Ongkos Kirim</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <a className="btn btn-primary" href="/checkout">Lanjut ke Checkout</a>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
