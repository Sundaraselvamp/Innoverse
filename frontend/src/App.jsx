import React, { useState } from 'react'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebDevelopment from './component/WebDevelopment';
import DigitalMarketing from './component/DigitalMarketing';
import DataAnalytics from './component/DataAnalytics';
import Contact from './component/Contact';
import { MyContextProvider } from './context/MyContext';

function App() {


  return (
    <>
    <MyContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/web-development' element={<WebDevelopment/>}/>
    <Route path='/digital-marketing' element={<DigitalMarketing/>}/>
    <Route path='/data-analytics' element={<DataAnalytics/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </MyContextProvider>
    </>
  )
}

export default App