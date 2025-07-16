import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/Screenshot_21.png";

const FireSprinklerSystem = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Main Components of a Fire Sprinkler System</h1>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex justify-center overflow-hidden rounded-xl shadow-lg"
                >
                    <img
                        src={image}
                        alt="Fire Sprinkler System Diagram"
                        className="w-full max-w-3xl h-auto object-contain"
                    />
                </motion.div>

                {[
                    {
                        title: "Component Description",
                        items: [
                            "Sprinkler Heads: Discharge water when triggered by heat.",
                            "Control Valve: Opens/closes the water supply.",
                            "Alarm Valve: Triggers an alarm when the system is active.",
                            "Piping Network: Distributes water throughout the building.",
                            "Water Storage Tank: Stores water for firefighting.",
                            "Fire Pump: Ensures water pressure is sufficient.",
                            "Flow Switch: Signals system activation to the alarm panel."
                        ]
                    },
                    {
                        title: "Types of Fire Sprinkler Systems",
                        ordered: true,
                        items: [
                            "Wet Pipe System: Most common; pipes are filled with water at all times.",
                            "Dry Pipe System: Pipes contain air under pressure; water is released when a valve opens.",
                            "Pre-Action System: Requires detection before water is released; ideal for sensitive areas like data centers.",
                            "Deluge System: All heads are open; water is released through all outlets simultaneously. Used in high-hazard areas."
                        ]
                    },
                    {
                        title: "Benefits of Fire Sprinkler Systems",
                        items: [
                            "Early fire detection and suppression",
                            "Minimizes property and asset damage",
                            "Increases life safety for occupants",
                            "Compliance with international fire safety codes (NFPA, BNBC)",
                            "Lower insurance premiums for protected properties"
                        ]
                    }
                ].map((section, index) => (
                    <div key={index} className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold">{section.title}</h2>
                        {section.ordered ? (
                            <ol className="list-decimal pl-6 space-y-2 text-lg">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ol>
                        ) : (
                            <ul className="list-disc pl-6 space-y-2 text-lg">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default FireSprinklerSystem;
