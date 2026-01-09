import { ArrowRight, Award, Building2, Globe, Mail, MapPin, Phone, Sparkles, Users } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${theme === 'dark'
        ? 'bg-linear-to-br from-gray-950 via-[#0d3c61]/10 to-gray-950'
        : 'bg-linear-to-br from-[#0d3c61]/5 via-white to-[#0d3c61]/10'
        }`}>
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-[#0d3c61]' : 'bg-[#0d3c61]'
              }`}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-[#0d3c61]/80' : 'bg-[#0d3c61]/80'
              }`}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm ${theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-[#0d3c61]/10 border-[#0d3c61]/20'}`}
              >
                <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === 'dark' ? 'text-white!' : 'text-[#0d3c61]'}`} />
                <span className={`font-semibold ${theme === 'dark' ? 'text-white!' : 'text-[#0d3c61]'}`}>
                  Empowering Careers Since 1995
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}
              >
                Transform Your
                <span className={`block ${theme === 'dark' ? 'text-white!' : 'text-[#0d3c61]'}`}>
                  Career Journey
                </span>
                With Expert Training
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className={`text-base sm:text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                High-end technical training and recruitment services across India, Africa, and the Middle East.
                ISO 9001:2015 certified with 25,000+ successful placements.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#freshers"
                  className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0d3c61] text-white! rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Join Freshers Drive
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className={`flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base ${theme === 'dark'
                    ? 'border-white text-white! hover:bg-white/10'
                    : 'border-[#0d3c61] text-[#0d3c61] hover:bg-gray-50'
                    }`}
                >
                  Explore Services
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-300 dark:border-gray-700">
                <div>
                  <div className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>30+</div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</div>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>3.5K+</div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Candidates Placed</div>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>25+</div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Countries Served</div>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>ISO</div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Certified</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Service Cards */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-4 sm:space-y-6 mt-8 lg:mt-0"
            >
              {[
                { icon: Sparkles, title: 'Train to Hire Services', desc: 'Ready-to-deploy resources for top IT Services and Captive organizations', color: 'bg-[#0d3c61]' },
                { icon: Users, title: 'Recruitment Services', desc: 'Strong technical team to find candidates best suited for your organization', color: 'bg-[#0d3c61]' },
                { icon: Award, title: 'Corporate Training', desc: 'High-end technical training with state-of-the-art infrastructure', color: 'bg-[#0d3c61]' }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-2xl ${theme === 'dark'
                      ? 'bg-gray-800/80 border border-gray-700 hover:border-gray-600'
                      : 'bg-white/80 border border-gray-200 hover:border-gray-300 shadow-lg'
                      }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-linear-to-br ${theme === 'dark' ? "bg-white" : `${service.color}`} text-white! shrink-0`}>
                        <Icon
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${theme === 'dark' ? 'text-[#0d3c61]' : 'text-white!'}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {service.desc}
                        </p>
                      </div>
                      <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0 ${theme === 'dark' ? 'text-white!' : 'text-[#0d3c61]'
                        }`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgent Hiring Banner */}
      <section id="freshers" className="w-full bg-linear-to-r bg-[#0d3c61] py-4 sm:py-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <a href="#freshers" className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white! text-center sm:text-left">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white" />
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                Live Now
              </span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white! font-semibold tracking-wide">
              <span className="font-bold text-white!">IMMEDIATE REQUIREMENT!!!</span> Leading MNC's Hiring Fresh Graduates at Micro Academy
            </p>
            <div className="flex items-center gap-2 group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300">
              <span className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white!' : 'text-white!'}`}>Apply Now</span>
              <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform ${theme === 'dark' ? 'text-white!' : 'text-white!'}`} />
            </div>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-12 sm:py-16 md:py-20 lg:py-24 ${theme === 'dark' ? 'bg-gray-950/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
              Our Core <span className={theme === 'dark' ? 'text-white!' : 'text-[#0d3c61]'}>Expertise</span>
            </h2>
            <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Specialized solutions tailored to bridge the gap between talent and opportunity.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                title: 'Train and Hire Services',
                desc: 'We help address your need for "Just in Time" hiring be it for fresh graduates or lateral.',
                linkText: 'Explore Train and Hire Services',
                icon: Sparkles,
                color: 'blue'
              },
              {
                title: 'Recruitment Services',
                desc: 'With the help of a strong technical team, we are in a position to cater to all your IT requirements and help find the candidate best suited for your organization and job role.',
                linkText: 'Explore Recruitment Services',
                icon: Users,
                color: 'indigo'
              },
              {
                title: 'Corporate Training',
                desc: 'Having been in the IT training domain for over 2 decades, we have with us instructors/consultants, who specialize in a wide range of technologies and have rich domain experience helping us customize your training requirement.',
                linkText: 'Explore Corporate Training',
                icon: Award,
                color: 'purple'
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              const colorClasses = {
                blue: theme === 'dark' ? 'bg-white/20 text-white! group-hover:bg-white/30' : 'bg-[#0d3c61]/10 text-[#0d3c61] group-hover:bg-[#0d3c61]',
                indigo: theme === 'dark' ? 'bg-white/20 text-white! group-hover:bg-white/30' : 'bg-[#0d3c61]/10 text-[#0d3c61] group-hover:bg-[#0d3c61]',
                purple: theme === 'dark' ? 'bg-white/20 text-white! group-hover:bg-white/30' : 'bg-[#0d3c61]/10 text-[#0d3c61] group-hover:bg-[#0d3c61]'
              }[service.color as 'blue' | 'indigo' | 'purple'];

              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 ${theme === 'dark'
                    ? 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]'
                    : 'bg-white border-gray-100 shadow-xl hover:shadow-2xl'
                    }`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 ${colorClasses} group-hover:text-white!`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.desc}
                  </p>
                  <a href="#" className={`inline-flex items-center gap-2 font-bold transition-all hover:gap-3 text-sm sm:text-base ${theme === 'dark' ? 'text-white!' : 'text-[#0d3c61]'}`}>
                    {service.linkText} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-16 md:py-20 lg:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                About Micro Academy
              </h2>
              <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  <strong className={theme === 'dark' ? 'text-white!' : 'text-gray-900'}>
                    Micro Academy (I) Pvt. Ltd.
                  </strong>{' '}
                  provides high-end Technical Training and Recruitment Services to a broad spectrum of customers across the globe.
                </p>
                <p>
                  We provide training and consultancy across India, Africa and the Middle East. Founded in 1995, Micro Academy is an ISO 9001:2015 certified organization that has trained and deployed over 25,000 candidates.
                </p>
                <p>We help address your need for "Just in Time" hiring be it for fresh graduates or lateral positions.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className={`p-4 sm:p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#0d3c61]/10'}`}>
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d3c61] mb-2 sm:mb-3" />
                  <div className={`text-xl sm:text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>1995</div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Founded</div>
                </div>
                <div className={`p-4 sm:p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-[#0d3c61]/10'}`}>
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d3c61] mb-2 sm:mb-3" />
                  <div className={`text-xl sm:text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>Global</div>
                  <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>25+ Countries</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-[#0d3c61]/5'}`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d3c61]" />
                Countries We've Trained In
              </h3>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
              >
                {['Bahrain', 'Bangladesh', 'Bulgaria', 'China', 'Ethiopia', 'Ghana', 'Hong Kong', 'Indonesia', 'Korea', 'Malaysia', 'Nigeria', 'Romania', 'Saudi Arabia', 'Singapore', 'South Africa', 'Oman', 'Turkey', 'Uganda', 'UAE'].map((country) => (
                  <motion.div
                    key={country}
                    variants={fadeInUp}
                    className={`flex items-center justify-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-[13px] font-bold text-center cursor-default group ${theme === 'dark'
                      ? 'bg-white/10 text-white! hover:bg-white hover:text-gray-900 border border-white/20'
                      : 'bg-white text-gray-700 shadow-sm hover:bg-[#0d3c61] hover:text-white! border border-[#0d3c61]/20'
                      }`}
                  >
                    {country}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-16 md:py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to transform your career? Contact us today!
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              { icon: MapPin, title: 'Visit Us', text: '#189, Amar Jyothi Layout,\nDomlur Ring Road,\nBangalore - 560071, India', href: 'https://goo.gl/maps/...' },
              { icon: Phone, title: 'Call Us', text: '+91 080-25358182\n+91 080-25359192', href: 'tel:+918025358182' },
              { icon: Mail, title: 'Email Us', text: 'info@microacademy.net', href: 'mailto:info@microacademy.net' }
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 border border-gray-700 hover:bg-gray-750 hover:shadow-lg' : 'bg-white hover:shadow-xl'
                  }`}
              >
                <contact.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#0d3c61]" />
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white!' : 'text-gray-900'}`}>{contact.title}</h3>
                <p className={`whitespace-pre-line text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{contact.text}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};