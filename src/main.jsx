import { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World</h1>
  },
  {
    path: "/books",
    element: <App />
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


