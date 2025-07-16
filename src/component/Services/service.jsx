import React from 'react';
import { motion } from 'framer-motion';
import logo1 from "../../assets/Screenshot_12.png";
import logo2 from "../../assets/Screenshot_13.png";
import logo3 from "../../assets/Screenshot_14.png";
import logo4 from "../../assets/Screenshot_15.png";
import { Link } from "react-router-dom";

const Service = () => {
    const services = [
        { title: "Fire Detection and Alarm Systems", description: "Advanced solutions tailored to detect risks early and alert occupants.", image: logo1, link: "/services/fire-systems" },
        { title: "Fire Protection System Design", description: "Professional design and planning customized to meet codes and project needs.", image: logo2, link: "/services/fire-systems" },
        { title: "Fire Safety Consultancy & Audit", description: "Comprehensive auditing services to evaluate and enhance safety infrastructure.", image: logo3, link: "/services/fire-systems" },
        { title: "Electrical Engineering Support", description: "Complete electrical system design, installation, and testing.", image: logo4, link: "/services/fire-systems" },
        { title: "Mechanical Engineering Support", description: "Expert services for HVAC, plumbing, and fire suppression systems.", image: logo1, link: "/services/fire-systems"},
        { title: "Project Management & Technical Supervision", description: "End-to-end project management and technical oversight.", image: logo2, link: "/services/fire-systems" },
        { title: "Customized Safety Training", description: "Tailor-made training programs for emergency preparedness.", image: logo3, link: "/services/fire-systems" },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {service.image && (
                                <div className="h-48 mb-6 rounded-lg overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-800">
                                <Link
                                    to={service.link}
                                    className="hover:text-blue-600 transition-colors duration-300"
                                >
                                    {service.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Service;