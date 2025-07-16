import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 md:py-28 lg:py-32 text-center px-4"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Welcome to SM Engineering Solution
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
                    Protecting lives & assets with world-class fire safety and engineering solutions.
                </p>
            </div>
        </motion.section>
    );
};

export default HeroBanner;