import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_5.png";
import image2 from "../../assets/Screenshot_4.png";

const Benifit = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 text-gray-800"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Benefits of a Fire Alarm System</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="space-y-6">
                        <ul className="list-disc pl-6 space-y-3 text-lg">
                            <li className="font-medium">Early detection of fire and smoke</li>
                            <li className="font-medium">Faster evacuation and emergency response</li>
                            <li className="font-medium">Compliance with fire safety codes (NFPA, BNBC)</li>
                            <li className="font-medium">Integration with other systems (sprinklers, doors, lifts)</li>
                            <li className="font-medium">Reduces fire damage and insurance risks</li>
                            <li className="font-medium">Customizable for any building type (residential, industrial, commercial)</li>
                        </ul>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">Where Fire Alarm Systems Are Essential</h3>
                            <ul className="list-disc pl-6 space-y-3 text-lg">
                                <li className="font-medium">Residential buildings and apartments</li>
                                <li className="font-medium">Office buildings and shopping malls</li>
                                <li className="font-medium">Factories, warehouses, and industrial plants</li>
                                <li className="font-medium">Hospitals, schools, and hotels</li>
                                <li className="font-medium">Server rooms and electrical installations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                            <img src={image1} alt="Fire Alarm Example 1" className="w-full h-auto object-cover" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                            <img src={image2} alt="Fire Alarm Example 2" className="w-full h-auto object-cover" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Benifit;