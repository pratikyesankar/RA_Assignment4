import React, { createContext, useContext, useEffect, useState } from "react"

const BookContext = createContext()
export const useBooks = () => useContext(BookContext)

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [idCounter, setIdCounter] = useState(1)

  useEffect(() => {
    const stored = localStorage.getItem("books")
    if (stored) {
      const parsed = JSON.parse(stored)
      setBooks(parsed)
      setIdCounter(parsed.length + 1)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  const addBook = (book) => {
    setBooks([...books, { ...book, id: idCounter }])
    setIdCounter(idCounter + 1)
  }

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  )
}
