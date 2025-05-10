import React from "react"
import { useBooks } from "./BookContext"

const BookList = ({ filter }) => {
  const { books, toggleStatus, deleteBook } = useBooks()

  const filteredBooks = books.filter((book) => {
    if (filter === "All") return true
    return book.status === filter
  })

  if (filteredBooks.length === 0) return <p>No books found.</p>

  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author} — {book.status}
          <button onClick={() => toggleStatus(book.id)}>Toggle</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default BookList
