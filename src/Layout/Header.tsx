import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import logo from '../assets/logo.png';
import iso from '../assets/iso.png';

type MenuItem = {
  label: string;
  href: string;
};

type Theme = 'light' | 'dark';

// Reusable animated nav link component
const NavLink = ({
  href,
  children,
  theme,
  className = '',
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  theme: Theme;
  className?: string;
  onClick?: () => void;
}) => (
  <motion.a
    href={href}
    onClick={onClick}
    className={`relative px-4 py-2 text-[15px] font-medium group ${className} ${
      theme === 'dark' ? 'text-white!' : 'text-gray-900'
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
  >
    {children}

    {/* Animated underline */}
    <motion.span
      className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full origin-left ${
        theme === 'dark' ? 'bg-sky-400' : 'bg-blue-600'
      }`}
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    />
  </motion.a>
);

// Desktop Dropdown component
const DropdownMenuServices = ({
  items,
  theme,
}: {
  items: MenuItem[];
  theme: Theme;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex items-center gap-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink href="#services" theme={theme}>
        Services
      </NavLink>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown
          className={`w-4 h-4 -ml-2 mt-1 ${
            theme === 'dark' ? 'text-white!' : 'text-gray-900'
          }`}
        />
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 mt-2 w-56 rounded-lg shadow-2xl overflow-hidden z-50 border ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
          }`}
        >
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={`block px-5 py-3 text-[14px] transition-colors ${
                theme === 'dark'
                  ? 'text-gray-200 hover:bg-gray-700 hover:text-white!'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Mobile Dropdown component
const MobileDropdown = ({
  items,
  theme,
  onItemClick,
}: {
  items: MenuItem[];
  theme: Theme;
  onItemClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium ${
          theme === 'dark' ? 'text-white!' : 'text-gray-900'
        }`}
      >
        Services
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={onItemClick}
                className={`block pl-8 pr-4 py-2.5 text-[14px] ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white! hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const companyItems: MenuItem[] = [
    { label: 'About Us', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Testimonials', href: '#' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <header
        className={`w-full transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-[#0f172a]'
            : 'bg-white/80 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2 sm:gap-3">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavLink href="#" theme={theme}>
                Home
              </NavLink>

              <NavLink href="#about" theme={theme}>
                About us
              </NavLink>

              <DropdownMenuServices items={companyItems} theme={theme} />

              <NavLink href="#freshers" theme={theme}>
                Freshers Drive
              </NavLink>

              <NavLink href="#" theme={theme}>
                Careers
              </NavLink>

              <NavLink href="#contact" theme={theme}>
                Contact
              </NavLink>
            </nav>

            {/* Right side - ISO + Hamburger */}
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src={iso} 
                  alt="ISO Certification" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain" 
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-gray-800 text-white!'
                    : 'hover:bg-gray-100 text-gray-900'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden overflow-hidden border-t ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              }`}
            >
              <nav className="px-4 py-4 space-y-1">
                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-[15px] font-medium rounded-lg ${
                    theme === 'dark'
                      ? 'text-white! hover:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-[15px] font-medium rounded-lg ${
                    theme === 'dark'
                      ? 'text-white! hover:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  About us
                </a>

                <MobileDropdown
                  items={companyItems}
                  theme={theme}
                  onItemClick={closeMobileMenu}
                />

                <a
                  href="#freshers"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-[15px] font-medium rounded-lg ${
                    theme === 'dark'
                      ? 'text-white! hover:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Freshers Drive
                </a>

                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-[15px] font-medium rounded-lg ${
                    theme === 'dark'
                      ? 'text-white! hover:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Careers
                </a>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-[15px] font-medium rounded-lg ${
                    theme === 'dark'
                      ? 'text-white! hover:bg-gray-800'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}