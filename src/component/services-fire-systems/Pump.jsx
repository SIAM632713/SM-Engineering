import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_6.png";
import image2 from "../../assets/Screenshot_7.png";

const Pump = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto space-y-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center">PURITY Fire Fighting Pump System</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={image1}
                            alt="Fire Fighting Pump System Diagram 1"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={image2}
                            alt="Fire Fighting Pump System Diagram 2"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>

                <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
                    The PURITY Fire Fighting Pump System ensures continuous water flow for fire suppression. It is designed with durability,
                    efficiency, and reliability to meet the safety standards of modern buildings and industrial setups.
                </p>
            </div>
        </motion.section>
    );
};

export default Pump;