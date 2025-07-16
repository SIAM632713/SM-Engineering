import React from 'react';
import Layout from "../component/Layout/layout.jsx";
import FireDoors from "../component/Product/Fire Doors.jsx";
import FireDoorAssembly from "../component/Product/Fire Door Assembly.jsx";
import Benifit from "../component/Product/benifit.jsx";
import Extinguisher from "../component/Product/Extinguisher.jsx";

const ProductsPage = () => {
    return (
        <Layout>
            <FireDoors/>
            <FireDoorAssembly/>
            <Benifit/>
            <Extinguisher/>
        </Layout>
    );
};

export default ProductsPage;