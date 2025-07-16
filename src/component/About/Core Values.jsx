import React from 'react';
import { motion } from 'framer-motion';

const CoreValues = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 text-gray-800"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        "Fire Detection and Alarm Systems",
                        "Fire Protection System Design",
                        "Fire Safety Consultancy & Audit",
                        "Electrical Engineering Support",
                        "Mechanical Engineering Support",
                        "Project Management & Technical Supervision",
                        "Customized Safety Training & Awareness Programs",
                        "Certified Expertise",
                        "Innovative Technology",
                        "Comprehensive Solutions",
                        "Unwavering Commitment to Quality & Safety",
                        "Customer-Centric Philosophy",
                        "Cost Efficiency",
                        "Sustainability Focus"
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-800">{service}</h3>
                            <p className="text-gray-600">
                                {[
                                    "Advanced fire detection and alarm solutions...",
                                    "Professional design and planning of fire protection...",
                                    "Comprehensive fire safety consulting and auditing...",
                                    "Complete electrical system design, safe installation...",
                                    "Expert mechanical engineering services for HVAC...",
                                    "End-to-end project management and technical oversight...",
                                    "Tailor-made safety training and awareness programs...",
                                    "Our team comprises highly qualified engineers...",
                                    "We leverage the latest technology and engineering...",
                                    "From initial design to final execution...",
                                    "Our approach prioritizes the highest levels...",
                                    "We partner with our clients, deeply understanding...",
                                    "We deliver premium services at competitive pricing...",
                                    "We are committed to eco-friendly practices..."
                                ][index]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default CoreValues;