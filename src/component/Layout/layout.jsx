import React from 'react';
import Footer from "./footer.jsx";
import Navber from "./navber.jsx";

const Layout = (props) => {
    return (
        <>
            <Navber/>
            <main className="min-h-[calc(100vh-160px)]">
                {props.children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;