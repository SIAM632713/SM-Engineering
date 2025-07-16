import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_2.png";
import image2 from "../../assets/Screenshot_3.png";

const Overfiew = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Fire Alarm System Overview</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image1} alt="Overfiew System Diagram 1" className="w-full h-auto object-cover" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image2} alt="Overfiew System Diagram 2" className="w-full h-auto object-cover" />
                    </motion.div>
                </div>

                <div className="mt-12 space-y-8">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Component Description</h3>
                        <ul className="space-y-4 text-lg">
                            {[
                                "Fire Alarm Control Panel (FACP): Brain of the system, manages signals and alarms.",
                                "Smoke Detectors: Detect smoke particles in the air.",
                                "Heat Detectors: Triggered by rising temperature.",
                                "Manual Call Points (MCP): Allow people to manually trigger the alarm.",
                                "Sounders & Flashers: Alert occupants through sound and light.",
                                "Backup Battery Unit: Keeps the system functional during power failure.",
                                "Zone Indicators: Display the exact location of the fire."
                            ].map((item, index) => (
                                <li key={index} className="flex">
                                    <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Types of Fire Alarm Systems</h3>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "1. Conventional Fire Alarm System",
                                    items: [
                                        "Suitable for small buildings",
                                        "Divides building into zones",
                                        "No exact pinpoint of fire location, only zone indication"
                                    ]
                                },
                                {
                                    title: "2. Addressable Fire Alarm System",
                                    items: [
                                        "Suitable for large or complex buildings",
                                        "Every device has a unique address",
                                        "Control panel shows exact device/location triggered"
                                    ]
                                },
                                {
                                    title: "3. Wireless Fire Alarm System",
                                    items: [
                                        "No physical cabling",
                                        "Ideal for temporary sites or heritage buildings"
                                    ]
                                }
                            ].map((system, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="text-xl font-bold mb-3">{system.title}</h4>
                                    <ul className="list-disc pl-6 space-y-2">
                                        {system.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Overfiew;