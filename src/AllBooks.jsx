import React, { useState } from "react"
import { useBooks } from "./BookContext"
import FilterButtons from "./FilterButtons"
import BookList from "./BookList"

const AllBooks = () => {
  const { books } = useBooks()
  const [filter, setFilter] = useState("All")

  const counts = {
    all: books.length,
    read: books.filter((b) => b.status === "Read").length,
    unread: books.filter((b) => b.status === "Unread").length,
  }

  return (
    <div>
      <h2>Library</h2>
      <FilterButtons filter={filter} setFilter={setFilter} counts={counts} />
      <BookList filter={filter} />
    </div>
  )
}

export default AllBooks
