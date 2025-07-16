import React from 'react';
import Layout from "../component/Layout/layout.jsx";
import HeroBanner from "../component/Home/Hero banner.jsx";
import ServiceHighlights from "../component/Home/service highlights.jsx";
import Contact from "../component/Home/contact.jsx";

const HomePage = () => {
    return (
        <Layout>
         <HeroBanner/>
            <ServiceHighlights/>
            <Contact/>
        </Layout>
    );
};

export default HomePage;