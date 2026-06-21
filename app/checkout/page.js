'use client';

import { useState } from 'react';
import { useCart } from '../../context/cart-context';

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Kartu Kredit/Debit');
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 15000 : 0;
  const total = subtotal + shipping;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const payload = {
      shippingAddress: { name, address, city, postalCode },
      paymentMethod,
      items: cart,
      total,
    };

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (response.ok) {
        setStatus(`Order berhasil dibuat: ${result.data.orderId}`);
        clearCart();
      } else {
        setStatus(result.error || 'Terjadi kesalahan saat checkout.');
      }
    } catch (error) {
      setStatus('Terjadi kesalahan jaringan.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="container section">
      <div className="section-header">
        <div>
          <span className="eyebrow">Checkout</span>
          <h2>Selesaikan pesanan Anda</h2>
        </div>
      </div>
      <form className="checkout-grid" onSubmit={handleSubmit}>
        <section className="checkout-form">
          <div className="form-card">
            <h3>Alamat Pengiriman</h3>
            <div className="input-group">
              <label>Nama Penerima</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nama lengkap" required />
            </div>
            <div className="input-group">
              <label>Alamat</label>
              <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Jl. Contoh No. 1" required />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Kota</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Jakarta" required />
              </div>
              <div className="input-group">
                <label>Kode Pos</label>
                <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="text" placeholder="12345" required />
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Metode Pembayaran</h3>
            <select className="payment-option" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option>Kartu Kredit/Debit</option>
              <option>Transfer Bank</option>
              <option>E-wallet</option>
            </select>
          </div>
        </section>

        <aside className="checkout-summary">
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
            <button className="btn btn-primary" type="submit" disabled={submitting || cart.length === 0}>
              {submitting ? 'Memproses...' : 'Bayar Sekarang'}
            </button>
            {status && <p className="status-message">{status}</p>}
          </div>
        </aside>
      </form>
    </main>
  );
}
