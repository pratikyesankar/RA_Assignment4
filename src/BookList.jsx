import React from "react"
import { useBooks } from "./BookContext"

const BookList = ({ filter }) => {
  const { books, deleteBook, toggleBookStatus } = useBooks()

  const filteredBooks =
    filter === "All" ? books : books.filter((book) => book.status === filter)

  if (filteredBooks.length === 0) return <p>No books found.</p>

  return (
    <ul>
      {filteredBooks.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author} — {book.status}
          <button onClick={() => toggleBookStatus(book.id)}>
            Toggle Status
          </button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default BookList
