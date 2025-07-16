import React from 'react';
import { motion } from 'framer-motion';

const ServiceHighlights = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-12 px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
            <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 text-blue-600">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fire Protection Systems</h3>
                <p className="text-gray-600">Design, installation, and maintenance ensuring safety standards.</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 text-blue-600">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Electrical & Mechanical Engineering</h3>
                <p className="text-gray-600">Complete solutions for electrical and mechanical system needs.</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 text-blue-600">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Safety Consultancy & Training</h3>
                <p className="text-gray-600">Customized programs for safety awareness and compliance.</p>
            </div>
        </motion.section>
    );
};

export default ServiceHighlights;