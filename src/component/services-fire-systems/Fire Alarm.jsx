import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_1.png";

const FireAlarm = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Fire Alarm System</h2>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex justify-center mb-10 overflow-hidden rounded-xl shadow-lg"
                >
                    <img
                        src={image1}
                        alt="Fire Alarm System Diagram"
                        className="w-full max-w-3xl h-auto object-contain"
                    />
                </motion.div>

                <p className="text-lg leading-relaxed mb-8">
                    A Fire Alarm System is a life safety system designed to detect fire at an early stage and alert building occupants through audio and visual alerts. Its main function is to minimize damage and protect lives by ensuring rapid evacuation and emergency response.
                </p>
                <h3 className="text-2xl font-semibold mb-6">How Does a Fire Alarm System Work?</h3>
                <ol className="list-decimal pl-6 space-y-4 text-lg">
                    <li>
                        <span className="font-semibold">Detection:</span> Sensors and detectors (such as smoke, heat, or flame detectors) constantly monitor the environment. When they detect fire-related changes (smoke, heat, gas), they send a signal to the Fire Alarm Control Panel (FACP).
                    </li>
                    <li>
                        <span className="font-semibold">Signal Transmission:</span> The Control Panel processes the input and identifies the exact zone or area where the fire has been detected.
                    </li>
                    <li>
                        <span className="font-semibold">Alarm Activation:</span> The system activates audio (sirens, horns) and visual (strobes, flashing lights) alarms throughout the building to alert occupants.
                    </li>
                    <li>
                        <span className="font-semibold">Emergency Notification:</span> Depending on the configuration, the system can also:
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Notify fire services automatically</li>
                            <li>Trigger building systems like fire doors, HVAC shutoff, or sprinkler systems</li>
                            <li>Send alerts via SMS, email, or app</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Manual Activation:</span> Fire alarms can also be activated by Manual Call Points (MCPs) — break-glass units installed at exit points or key locations.
                    </li>
                </ol>
            </div>
        </motion.section>
    );
};

export default FireAlarm;