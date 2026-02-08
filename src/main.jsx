import { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import Books from './routes/Books/Books.jsx'
import Readings from './routes/Readings/Readings.jsx'
import Home from './routes/Home/Home.jsx'
import Done from './routes/Done/Done.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Backup from './routes/Backup/Backup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/books",
    Component: Books
  },
  {
    path: "/readings",
    Component: Readings
  },
  {
    path: "/done",
    Component: Done
  },
  {
    path: "/backup",
    Component: Backup
  }
])

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <RouterProvider router={router}/>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


