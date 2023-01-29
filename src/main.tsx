import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }, {
        path: '/blogs',
        element: <Blogs />
    }, {
        path: '/blogs/1',
        element: <Blog />
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
