import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import User from './User.jsx';
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/user/:username',
        loader: async ({params}) => {
            return {
                name: params.username
            };
        },
        Component: User
    }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
