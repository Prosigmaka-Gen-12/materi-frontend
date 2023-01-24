import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import About from './About'

const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
    ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
