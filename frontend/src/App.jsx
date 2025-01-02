import React from 'react';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebDevelopment from './component/WebDevelopment';
import DigitalMarketing from './component/DigitalMarketing';
import DataAnalytics from './component/DataAnalytics';
import Contact from './component/Contact';
import About from './component/About'; // Import the About component
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <>
      <MyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} /> {/* Add the About route */}
            <Route path='/web-development' element={<WebDevelopment />} />
            <Route path='/digital-marketing' element={<DigitalMarketing />} />
            <Route path='/data-analytics' element={<DataAnalytics />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </>
  );
}

export default App;
