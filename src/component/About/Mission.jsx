import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../../assets/Screenshot_10.png";
import image2 from "../../assets/Screenshot_11.png";

const Mission = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">SM Engineering Solution</h2>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        We specialize in the consultancy, design, supply & installation as well as maintenance of complete range of Fire Protection System, Electrical System, MEP Engineering, Building Automation, Security System, Industrial Pump & Safety Equipment.
                    </p>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        Our customers are assured of the best from design, manufacturing to delivery, installation and service. Our team members/engineers are professionals and skilled technicians well experienced in interpreting specifications and requirements of enforcement authorities.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We provide full range of Fire Protection, electrical, mechanical & security system products imported from International Market to International Standards such as BNBC, UL, FM, BS, EN, AS, PSB, MS, LPCB, CE, ISO-9002, NFPA.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src={image1}
                        alt="Meeting"
                        className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-full"
                    />
                    <img
                        src={image2}
                        alt="Workspace"
                        className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-full"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Mission;