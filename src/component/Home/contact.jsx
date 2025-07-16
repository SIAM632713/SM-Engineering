import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 py-12 px-4 sm:px-8 text-center"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
                    Contact us for customized solutions and expert advice.
                </p>
                <form className="max-w-xl mx-auto space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </motion.section>
    );
};

export default Contact;