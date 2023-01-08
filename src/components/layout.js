import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function Layout({ title, children }) {
    return (

        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}