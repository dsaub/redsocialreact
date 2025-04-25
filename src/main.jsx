import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router";
import User from "./User.jsx";
import "./index.css";
import FatalError from './elements/FatalError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/users/:username',
        loader: async ({params}) => {
            return {
                username: params.username
            }
        },
        Component: User
    },
    {
        path: '/testError',
        element: <FatalError code="TEST_ERROR" />
    }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
