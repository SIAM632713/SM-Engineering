import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/Screenshot_25.png";

const FireDoorAssembly = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Main Components of a Fire Door Assembly</h1>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex justify-center overflow-hidden rounded-xl shadow-lg"
                >
                    <img
                        src={image}
                        alt="Fire Door Assembly Diagram"
                        className="w-full max-w-3xl h-auto object-contain"
                    />
                </motion.div>

                {[
                    {
                        title: "Component Purpose",
                        items: [
                            "Fire-Rated Door Leaf: The main part of the door, resistant to fire and heat.",
                            "Fire Door Frame: Fire-resistant frame that supports the door.",
                            "Intumescent Seals: Expand when heated to seal gaps around the door.",
                            "Smoke Seals: Prevent smoke from leaking through door edges.",
                            "Fire-Rated Hardware: Hinges, locks, and closers that withstand high heat.",
                            "Self-Closing Mechanism: Ensures the door closes automatically in case of fire.",
                            "Vision Panel (optional): Fire-rated glass for visibility, without compromising safety."
                        ]
                    },
                    {
                        title: "Benefits of Fire Doors",
                        items: [
                            "Limits the spread of fire and smoke, reducing damage",
                            "Provides life-saving time for people to evacuate safely",
                            "Protects property and infrastructure from total destruction",
                            "Helps meet local fire codes and building regulations (NFPA, BNBC)",
                            "Lowers insurance risk and may reduce premiums",
                            "Improves compartmentalization in buildings, especially in high-rises and factories"
                        ]
                    },
                    {
                        title: "Where Should Fire Doors Be Installed",
                        items: [
                            "Between corridors and stairwells",
                            "At the entrance of electrical and generator rooms",
                            "In commercial kitchens and server rooms",
                            "Between different fire zones or floors",
                            "In basements, factories, and warehouses"
                        ]
                    }
                ].map((section, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.title}</h2>
                        <ul className="list-disc pl-6 space-y-3 text-gray-700">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default FireDoorAssembly;