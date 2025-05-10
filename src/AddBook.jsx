import React, { useState } from "react"
import { useBooks } from "./BookContext"

const AddBook = () => {
  const { addBook } = useBooks()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [status, setStatus] = useState("Unread")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !author) return
    addBook({ title, author, status })
    setTitle("")
    setAuthor("")
    setStatus("Unread")
    setMessage("Book added successfully!")
    setTimeout(() => setMessage(""), 2000)
  }

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Unread">Unread</option>
          <option value="Read">Read</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default AddBook
