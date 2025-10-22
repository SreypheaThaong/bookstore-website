"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface Book {
  id: number
  title: string
  author: string
  price: number
  category: string
  rating: number
  description: string
  image: string
  isbn: string
}

export interface CartItem extends Book {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (book: Book) => void
  removeFromCart: (bookId: number) => void
  updateQuantity: (bookId: number, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("readverse-cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("readverse-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (book: Book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...book, quantity: 1 }]
    })
  }

  const removeFromCart = (bookId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId))
  }

  const updateQuantity = (bookId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bookId)
      return
    }
    setCart((prevCart) => prevCart.map((item) => (item.id === bookId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
