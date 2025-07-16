import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/Screenshot_26.png";

const Benefit = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Fire Exit Lights</h1>
                <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
                    Fire Exit Lights are crucial emergency lighting devices designed to guide people safely out of a building during fire incidents, power failures, or other emergencies.
                    These lights are typically installed above exit doors, along corridors, stairways, and escape routes.
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src={image}
                            alt="Fire Exit Lights"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <section className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">How It Works</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Fire Exit Lights operate using either a central power system or an internal rechargeable battery. When normal power is available, the light remains illuminated or on standby mode. During a power outage or emergency, the internal battery activates automatically, ensuring the sign remains visible for a specified duration (commonly 90–180 minutes).
                            </p>
                        </section>

                        <section className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Key Benefits</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                {[
                                    "Life-saving Guidance: Illuminates the path to exits, reducing panic during emergencies.",
                                    "Automatic Operation: Works seamlessly during power loss.",
                                    "Low Maintenance: Energy-efficient LEDs with long lifespan.",
                                    "Compliance: Meets fire safety regulations and building codes.",
                                    "Visibility: High-contrast signs with clear directional arrows, visible even in smoke or low light."
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Applications</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                {[
                                    "Commercial buildings",
                                    "Shopping malls",
                                    "Hospitals & clinics",
                                    "Factories & warehouses",
                                    "Educational institutions",
                                    "Hotels & high-rise apartments"
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Benefit;