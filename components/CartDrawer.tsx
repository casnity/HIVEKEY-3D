"use client";

import { useCart } from "./CartContext";
import { motion, AnimatePresence } from "motion/react";

export function CartDrawer() {
  const { items, isCartOpen, toggleCart, updateQuantity, removeFromCart, checkout } = useCart();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Floating Cart Button on Left Side */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={toggleCart}
        className="fixed left-6 bottom-10 z-50 bg-[#c85a17] text-white p-4 rounded-full shadow-[0_0_20px_rgba(200,90,23,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-[#c85a17] text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md">
            {itemCount}
          </span>
        )}
      </motion.button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleCart}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0A0A0C] border-l border-white/10 z-[101] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                <button onClick={toggleCart} className="text-white/50 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="text-center text-white/50 mt-10">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="w-16 h-16 bg-[#1a1a1a] rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                        <svg className="w-8 h-8 text-[#c85a17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <div className="text-[#c85a17] font-bold mt-1">${item.price}</div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3 bg-black/50 rounded-full px-2 py-1 border border-white/10">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-white/50 hover:text-white w-6 h-6 flex items-center justify-center">-</button>
                          <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-white/50 hover:text-white w-6 h-6 flex items-center justify-center">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-300 underline">Remove</button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-black/20">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white/60">Subtotal</span>
                    <span className="text-2xl font-bold text-white">${total}</span>
                  </div>
                  <button onClick={checkout} className="w-full relative overflow-hidden rounded-2xl px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c85a17] via-[#a04008] to-[#602000] opacity-90 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Proceed to Checkout
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
