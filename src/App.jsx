import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/Home-page.jsx";
import AboutPage from "./page/About-page.jsx";
import ProductsPage from "./page/Products-page.jsx";
import ServicesPage from "./page/Services-page.jsx";
import SolutionsPager from "./page/Solutions-pager.jsx";
import FireSystemsPage from "./page/fire-systems-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/Products" element={<ProductsPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/solutation" element={<SolutionsPager/>}/>
                <Route path="/services/fire-systems" element={<FireSystemsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;