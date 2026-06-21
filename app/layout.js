import './globals.css';
import { CartProvider } from '../context/cart-context';

export const metadata = {
  title: 'Njie Outfit - Fashion & Lifestyle',
  description: 'Platform e-commerce fashion dan lifestyle modern.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <CartProvider>
          <header className="topbar">
            <div className="container header-inner">
              <div className="brand">Njie Outfit</div>
              <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/products">PLP</a>
                <a href="/cart">Cart</a>
                <a href="/checkout">Checkout</a>
              </nav>
              <button className="btn btn-secondary login-btn">Masuk</button>
            </div>
          </header>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
