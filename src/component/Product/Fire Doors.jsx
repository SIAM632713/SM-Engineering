import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/Screenshot_23.png";
import image1 from "../../assets/Screenshot_24.png";

const FireDoors = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">What is a Fire Door?</h1>

                <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
                    A Fire Door is a specially engineered door designed to resist the spread of fire, smoke, and heat for a specified period—typically 30, 60, 90, or 120 minutes. These doors are an essential component of passive fire protection systems in buildings and are built using fire-resistant materials such as steel, gypsum, or fire-rated timber. Fire doors are tested and certified according to international standards like BS 476, EN 1634, or UL 10C to ensure they can withstand fire for their rated duration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image} alt="Fire Door Example 1" className="w-full h-auto object-cover" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image1} alt="Fire Door Example 2" className="w-full h-auto object-cover" />
                    </motion.div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Are Fire Doors Used?</h2>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        {[
                            "Containing fire and smoke within a specific area",
                            "Protecting escape routes (staircases, corridors, and exits)",
                            "Allowing safe evacuation of building occupants",
                            "Minimizing structural damage to other parts of the building",
                            "Providing extra time for emergency responders to act"
                        ].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Fire doors are installed in key locations like stairwells, building entrances, between fire zones, and corridors to slow the spread of fire and smoke.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default FireDoors;