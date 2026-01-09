import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`relative py-8 sm:py-12 md:py-16 overflow-hidden border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
                    {/* Column 1: About / Logo & Description */}
                    <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
                        <h3 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                            Micro Academy
                        </h3>
                        <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            Leading provider of high-end Technical Training and Recruitment Services globally since 1995.
                            ISO 9001:2015 certified organization delivering Training for Hire, Corporate Training, and Recruitment solutions.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Twitter, label: 'Twitter' },
                                { icon: Linkedin, label: 'LinkedIn' },
                                { icon: Youtube, label: 'YouTube' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    aria-label={social.label}
                                    className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 ${theme === 'dark'
                                        ? 'bg-gray-800 text-gray-300 hover:bg-[#0d3c61] hover:text-white!'
                                        : 'bg-white text-gray-700 hover:bg-[#0d3c61] hover:text-white! shadow-sm'
                                        }`}
                                >
                                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Home', 'About Us', 'Services', 'Training Programs', 'Clients', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className={`group inline-flex items-center gap-1 text-sm sm:text-base transition-all duration-200 ${theme === 'dark' ? 'text-gray-400 hover:text-white!' : 'text-gray-600 hover:text-[#0d3c61]'}`}
                                    >
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                            Our Services
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Training for Hire', 'Corporate Training', 'Recruitment Services', 'Technical Training', 'Placement Assistance'].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#"
                                        className={`text-sm sm:text-base transition-all duration-200 ${theme === 'dark' ? 'text-gray-400 hover:text-white!' : 'text-gray-600 hover:text-[#0d3c61]'}`}
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact / Office Info */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h4 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                            Contact Us
                        </h4>
                        <div className={`space-y-4 sm:space-y-5 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 text-[#0d3c61] shrink-0 sm:w-5 sm:h-5" />
                                <p>
                                    Micro Academy (India) Pvt. Ltd.<br />
                                    Chennai, Tamil Nadu, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#0d3c61] shrink-0 sm:w-5 sm:h-5" />
                                <a href="tel:+914442064000" className="hover:underline hover:text-[#0d3c61] transition-colors">
                                    +91 44 4206 4000
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#0d3c61] shrink-0 sm:w-5 sm:h-5" />
                                <a href="mailto:info@microacademy.net" className="hover:underline hover:text-[#0d3c61] transition-colors break-all">
                                    info@microacademy.net
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left`}>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                        © 2009 - {new Date().getFullYear()} Micro Academy. All rights reserved.
                    </p>
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                        Designed & Developed by <a href="#" className="font-semibold text-[#0d3c61] hover:underline">Micro Academy Team</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;