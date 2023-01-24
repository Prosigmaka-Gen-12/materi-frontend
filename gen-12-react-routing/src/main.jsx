import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import About from './About'
import Product, { productLoader } from './Product'

const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'product/:productId/:bambang?', element: <Product />, loader: productLoader },
    ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
