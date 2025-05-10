import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { BookProvider } from "./BookContext"
import Navbar from "./Navbar"
import AddBook from "./AddBook"
import AllBooks from "./AllBooks"

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="*" element={<Navigate to="/books" />} />
        </Routes>
      </Router>
    </BookProvider>
  )
}

export default App
