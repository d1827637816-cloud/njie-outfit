'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext({
  cart: [],
  loading: false,
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      try {
        const response = await fetch('/api/cart');
        const result = await response.json();
        setCart(result.data || []);
      } catch (error) {
        console.error('Failed to load cart', error);
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...item, action: 'add' }),
      });
      const result = await response.json();
      setCart(result.data || []);
    } catch (error) {
      console.error('Failed to add item to cart', error);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quantity, action: 'set' }),
      });
      const result = await response.json();
      setCart(result.data || []);
    } catch (error) {
      console.error('Failed to update cart quantity', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      setCart(result.data || []);
    } catch (error) {
      console.error('Failed to remove cart item', error);
    }
  };

  const clearCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'clear' }),
      });
      const result = await response.json();
      setCart(result.data || []);
    } catch (error) {
      console.error('Failed to clear cart', error);
    }
  };

  const value = useMemo(
    () => ({ cart, loading, addToCart, updateQuantity, removeFromCart, clearCart }),
    [cart, loading]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
