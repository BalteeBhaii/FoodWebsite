import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,Route,  createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import App from './App.jsx'
import AboutPage from "./pages/AboutPage"
import HomePage from   './pages/HomePage'
import RecipePage from './pages/RecipePage'
import './index.css'

const router =createBrowserRouter(
  createRoutesFromElements(
    // App is a parent comonenet and there we define alll the reuse html structure
  <Route path='/' element={<App/>}>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/recipe/:id" element={<RecipePage/>} />
  
  </Route>)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
