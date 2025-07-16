import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_8.png";
import image2 from "../../assets/Screenshot_9.png";

const FirePump = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Fire Pump Systems Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image1} alt="Horizontal Split Case Fire Pump" className="w-full h-auto object-contain" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img src={image2} alt="Vertical Turbine Fire Pump" className="w-full h-auto object-contain" />
                    </motion.div>
                </div>

                {[
                    {
                        title: "Horizontal Split Case Fire Pumps",
                        description: "Horizontal split case fire pumps have a robust design with a horizontally split casing that allows easy access to internal components. They are typically dual-suction pumps, capable of handling large volumes of water efficiently.",
                        advantages: [
                            "Highly Efficient: Capable of delivering high flow rates with minimal energy consumption.",
                            "Easy to Maintain: Split case design allows technicians to access internal parts without disturbing the pump's alignment or piping.",
                            "Reliable Performance: Well-suited for continuous, high-capacity operation."
                        ],
                        bestFor: [
                            "Medium to high-rise buildings such as apartment complexes, hospitals, and large commercial facilities.",
                            "Applications requiring high water flow and pressure for extensive fire protection systems."
                        ]
                    },
                    {
                        title: "Vertical Turbine Fire Pumps",
                        description: "Vertical turbine fire pumps are specially designed for scenarios where the water source is located below ground level, such as in wells, reservoirs, or tanks. These pumps use a series of impellers to lift water from the source to the fire protection system.",
                        advantages: [
                            "Ideal for Deep Water Sources: Perfect for remote locations or unique water supply challenges.",
                            "Space-Saving Design: Vertical orientation reduces the footprint, making it suitable for tight spaces.",
                            "Durable and Reliable: Performs well under challenging conditions, with a long service life."
                        ]
                    },
                    {
                        title: "Choosing the Right Fire Pump",
                        description: "Choosing the right fire pump is critical for ensuring the safety of your building. They supply the necessary water pressure and flow to fire sprinkler systems, as mandated by NFPA 20, the standard for installing stationary pumps for fire protection. Selecting the right fire pump involves careful consideration of several factors, including type, size, capacity, and power source."
                    },
                    {
                        title: "End Suction Fire Pumps",
                        description: "End suction fire pumps are characterized by their compact design, with the suction and discharge nozzles positioned perpendicular to each other. They are a single-stage centrifugal pump and are widely used in fire protection systems for their simplicity and efficiency.",
                        advantages: [
                            "Simple Design: Easy to install and operate, making it a popular choice for basic fire protection needs.",
                            "Cost-Effective: Among the most economical fire pumps, both in terms of initial investment and maintenance.",
                            "Easy Maintenance: Straightforward access to pump components for repair and inspection."
                        ],
                        bestFor: [
                            "Low-rise buildings such as schools, small offices, or warehouses.",
                            "Applications with moderate water demand and pressure requirements."
                        ]
                    }
                ].map((section, index) => (
                    <div key={index} className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold">{section.title}</h2>
                        <p className="text-lg leading-relaxed">{section.description}</p>

                        {section.advantages && (
                            <>
                                <h3 className="text-xl font-semibold">Advantages:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-lg">
                                    {section.advantages.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {section.bestFor && (
                            <>
                                <h3 className="text-xl font-semibold">Best For:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-lg">
                                    {section.bestFor.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default FirePump;