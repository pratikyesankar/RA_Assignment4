import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/books" style={{ marginRight: "20px" }}>
        All Books
      </Link>
      <Link to="/add"> Add Book</Link>
    </nav>
  )
}

export default Navbar
