import React, { createContext, useContext, useEffect, useState } from "react"

const BookContext = createContext()
export const useBooks = () => useContext(BookContext)

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("books")
    if (stored) {
      const parsed = JSON.parse(stored)
      setBooks(parsed)
    }
  }, [])

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books))
    }
  }, [books])

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, { ...book, id: Date.now() }])
  }

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id))
  }

  const toggleBookStatus = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
          : book
      )
    )
  }

  return (
    <BookContext.Provider
      value={{ books, addBook, deleteBook, toggleBookStatus }}
    >
      {children}
    </BookContext.Provider>
  )
}
