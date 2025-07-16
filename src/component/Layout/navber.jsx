import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 text-white p-4 relative z-50"
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <div className="text-xl font-bold">SM Engineering</div>
                </Link>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 rounded-md hover:bg-gray-700 transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <Link to="/">
                        <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">About</li>
                    </Link>
                    <Link to="/services">
                        <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">Services</li>
                    </Link>
                    <Link to="/Products">
                        <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">Products</li>
                    </Link>
                </ul>
            </div>

            {/* Mobile Right Sidebar */}
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween' }}
                    className="fixed inset-0 backdrop-brightness-50 z-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="absolute top-0 right-0 w-64 h-full bg-gray-900 text-white shadow-lg p-6 flex flex-col gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-semibold">Menu</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-md hover:bg-gray-800 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">Home</li>
                            </Link>
                            <Link to="/about" onClick={() => setIsOpen(false)}>
                                <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">About</li>
                            </Link>
                            <Link to="/services" onClick={() => setIsOpen(false)}>
                                <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">Services</li>
                            </Link>
                            <Link to="/Products" onClick={() => setIsOpen(false)}>
                                <li className="hover:text-yellow-400 cursor-pointer px-3 py-2 transition-colors duration-200">Products</li>
                            </Link>
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navber;