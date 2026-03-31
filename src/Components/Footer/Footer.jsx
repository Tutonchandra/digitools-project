import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#101727] border-t border-gray-900/50 pt-16 pb-10">
            <div className=" container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-4">
                        <div className="flex items-end  gap-3 mb-6">
                            <h2 className="text-4xl font-bold tracking-wide text-white">
                                DigiTools
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Fretures
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Intregrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="col-span-2 ">
                        <h3 className="text-white font-semibold mb-6 text-2xl">Social Links</h3>
                        
                        <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
                            <a href="#" className="hover:text-white rounded-full p-2 transition-colors"><FaGithub /></a>
                            <a href="#" className="hover:text-white rounded-full p-2 transition-colors"><FaTwitter /></a>
                            <a href="#" className="hover:text-white rounded-full p-2 transition-colors"><FaLinkedin /></a>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t justify-between container  mx-auto  border-zinc-800 flex flex-col md:flex-row align-center  gap-4 text-sm text-zinc-500">
                <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

                <div className="flex gap-6 ">
                    <a href="#" className="hover:text-white transition">
                        Created by TutonChandra ❤️
                    </a>
                </div>
            </div>

        </footer >
    );
};

export default Footer;