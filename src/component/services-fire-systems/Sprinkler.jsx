import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_18.png";
import image2 from "../../assets/Screenshot_19.png";
import image3 from "../../assets/Screenshot_20.png";

const Sprinkler = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">What is a Fire Sprinkler System?</h1>

                <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
                    A Fire Sprinkler System is an active fire protection measure consisting of a water supply system providing adequate pressure
                    and flowrate to a piping system, onto which fire sprinklers are connected. These systems automatically detect and suppress
                    fires at an early stage, minimizing property damage and saving lives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {[image1, image2, image3].map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="overflow-hidden rounded-xl shadow-lg"
                        >
                            <img
                                src={img}
                                alt={`Fire Sprinkler System Diagram ${index+1}`}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-semibold">How Does a Fire Sprinkler System Work?</h2>
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                        {[
                            "Heat Detection: Each sprinkler head contains a heat-sensitive element, typically a glass bulb filled with a liquid that expands when heated. When the ambient temperature near the sprinkler rises to a predefined level (usually between 57°C and 74°C), the bulb bursts.",
                            "Sprinkler Activation: Once the bulb bursts, it opens the sprinkler head, allowing pressurized water stored in the pipes to be released.",
                            "Localized Water Discharge: Only the sprinkler(s) nearest to the fire are activated. This localized discharge ensures that water is targeted precisely where needed, reducing water damage in other areas.",
                            "Fire Suppression: The released water douses the fire, cooling the burning material and controlling or extinguishing the flame before it can spread.",
                            "System Alarm (Optional): Many systems are integrated with a fire alarm control panel that notifies emergency services or building occupants upon activation."
                        ].map((item, index) => (
                            <li key={index} className="leading-relaxed">
                                <span className="font-semibold">{item.split(':')[0]}:</span>{item.split(':')[1]}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </motion.section>
    );
};

export default Sprinkler;