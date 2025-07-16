import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 text-gray-300 p-6 text-center"
        >
            <p className="mb-2">© {new Date().getFullYear()} SM Engineering Solution. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            </div>
        </motion.footer>
    );
};

export default Footer;