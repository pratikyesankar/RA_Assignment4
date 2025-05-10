import React, { useState } from "react"
import { useBooks } from "./BookContext"

const BookForm = () => {
  const { addBook } = useBooks()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [status, setStatus] = useState("Unread")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook({ title, author, status })
    setTitle("")
    setAuthor("")
    setStatus("Unread")
    setMessage("Book added!")
    setTimeout(() => setMessage(""), 2000)
  }

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Unread">Unread</option>
          <option value="Read">Read</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default BookForm
