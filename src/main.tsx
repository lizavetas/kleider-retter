import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Donation from './pages/Donation/Donation';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: 'about',
                element: <AboutUs/>,
            },
            {
                path: 'donation',
                element: <Donation/>,
            },
            {
                path: 'contact',
                element: <Contact/>,
            },
        ],
    },
]);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

