import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import About from './pages/about';
import Course from './pages/course';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/blog';
import Blog_Data from './pages/Blog_Data';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'course',
      element:<Course/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
      path:'blog/:id',
      element:<Blog_Data/>
    },
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
