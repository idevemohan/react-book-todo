import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Book from './pages/Book'
import { BookProvider } from "./pages/BookContext"



function App() {
  const [count, setCount] = useState(0)

  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>

    </BookProvider>


  )
}

export default App
