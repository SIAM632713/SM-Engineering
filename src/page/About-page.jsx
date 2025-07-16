import React from 'react';
import Layout from "../component/Layout/layout.jsx";
import Mission from "../component/About/Mission.jsx";
import Vision from "../component/About/Vision.jsx";
import CoreValues from "../component/About/Core Values.jsx";

const AboutPage = () => {
    return (
        <Layout>
            <Mission/>
            <Vision/>
            <CoreValues/>
        </Layout>
    );
};

export default AboutPage;