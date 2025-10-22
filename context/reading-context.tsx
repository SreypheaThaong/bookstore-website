"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ReadingMode = "light" | "dark"
type FontSize = "small" | "medium" | "large"

interface ReadingContextType {
  readingMode: ReadingMode
  fontSize: FontSize
  toggleReadingMode: () => void
  setFontSize: (size: FontSize) => void
  favorites: string[]
  addToFavorites: (bookId: string) => void
  removeFromFavorites: (bookId: string) => void
  isFavorite: (bookId: string) => boolean
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined)

export function ReadingProvider({ children }: { children: ReactNode }) {
  const [readingMode, setReadingMode] = useState<ReadingMode>("light")
  const [fontSize, setFontSize] = useState<FontSize>("medium")
  const [favorites, setFavorites] = useState<string[]>([])

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const toggleReadingMode = () => {
    setReadingMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  const addToFavorites = (bookId: string) => {
    setFavorites((prev) => [...prev, bookId])
  }

  const removeFromFavorites = (bookId: string) => {
    setFavorites((prev) => prev.filter((id) => id !== bookId))
  }

  const isFavorite = (bookId: string) => {
    return favorites.includes(bookId)
  }

  return (
    <ReadingContext.Provider
      value={{
        readingMode,
        fontSize,
        toggleReadingMode,
        setFontSize,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </ReadingContext.Provider>
  )
}

export function useReading() {
  const context = useContext(ReadingContext)
  if (context === undefined) {
    throw new Error("useReading must be used within a ReadingProvider")
  }
  return context
}
