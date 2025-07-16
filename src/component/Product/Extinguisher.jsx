import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_29 (2).png";
import image2 from "../../assets/Screenshot_29 (1).png";

const Extinguisher = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Fire Extinguishers</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image1} alt="Fire Extinguisher Type 1" className="w-full h-auto object-cover" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image2} alt="Fire Extinguisher Type 2" className="w-full h-auto object-cover" />
                    </motion.div>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            title: "What is a Fire Extinguisher?",
                            content: "A fire extinguisher is a portable safety device used to extinguish or control small fires, often in emergency situations. It contains an agent that can be discharged to suppress flames effectively before the fire spreads or causes severe damage."
                        },
                        {
                            title: "How It Works",
                            content: "Fire extinguishers work by removing one or more elements of the fire triangle: heat, fuel, or oxygen. Different types of extinguishers use different agents:",
                            list: [
                                "Water – Cools the fire (used on Class A fires: wood, paper, cloth)",
                                "Foam – Smothers the fire and prevents re-ignition",
                                "Dry Chemical Powder – Interrupts the chemical reaction",
                                "CO₂ (Carbon Dioxide) – Displaces oxygen and cools the fire",
                                "Clean Agent / Gas – Non-residue, effective for sensitive electronics"
                            ],
                            additional: "The device is activated by pulling the safety pin, aiming the nozzle, and squeezing the handle while sweeping at the base of the fire."
                        },
                        {
                            title: "Where Fire Extinguishers Are Used",
                            list: [
                                "Offices and commercial buildings",
                                "Homes and apartments",
                                "Factories and warehouses",
                                "Hospitals and schools",
                                "Shopping centers and malls",
                                "Vehicles, aircraft, and ships",
                                "Electrical rooms and server rooms"
                            ]
                        },
                        {
                            title: "Key Benefits",
                            list: [
                                "Quick Response: Provides immediate action before fire spreads",
                                "Life & Property Protection: Minimizes damage and injury",
                                "Portable & Easy to Use: Simple mechanism for all users",
                                "Regulatory Compliance: Required by fire safety regulations",
                                "Cost-Effective Safety Tool: Low investment, high impact"
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>
                            {section.content && <p className="mb-4 text-gray-700 leading-relaxed">{section.content}</p>}
                            {section.list && (
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {section.additional && <p className="mt-4 text-gray-700 leading-relaxed">{section.additional}</p>}
                        </div>
                    ))}

                    <p className="italic text-center text-gray-600">
                        Fire extinguishers are essential components of any fire safety plan and must be regularly maintained for optimal performance.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Extinguisher;