import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BookProvider } from "./pages/BookContext"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const container = document.getElementById('root');
const root = createRoot(container);


// ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>

  </StrictMode>

);