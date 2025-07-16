import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission & Vision</h2>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Mission Statement</h3>
                    <p className="text-lg leading-relaxed">
                        To deliver world-class fire safety and engineering solutions by integrating innovation, quality, and reliability, ensuring the protection and empowerment of communities and industries worldwide.
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Vision Statement</h3>
                    <p className="text-lg leading-relaxed">
                        To be a global leader in fire safety innovation, engineering excellence, and technical consultancy, creating safer, smarter, and more sustainable environments.
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-600">Core Values</h3>
                    <ul className="space-y-4">
                        {[
                            "Innovation: Relentless pursuit of new technologies and creative solutions.",
                            "Integrity: Operating with transparency, honesty, and ethical standards.",
                            "Excellence: Exceeding expectations through superior quality and performance.",
                            "Safety Commitment: Prioritizing the protection of life and property at every stage.",
                            "Customer-Centric Approach: Building long-term partnerships by understanding and exceeding customer needs.",
                            "Sustainability: Promoting environmentally responsible practices in all operations.",
                            "Collaboration: Harnessing the power of teamwork and collective intelligence."
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Vision;