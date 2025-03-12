import {
  Building,
  Globe,
  BarChart3,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CompanyOverviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-blue-800 to-indigo-900 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <motion.div variants={itemVariants}>
              <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">
                Company Intelligence
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Company Overview
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mt-4 text-xl text-blue-200">
                Unlock company details with business description, exchange,
                Country, Region, Industry, Sector and more.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-10 space-y-6"
            >
              {[
                {
                  icon: Building,
                  title: "Comprehensive Profiles",
                  description:
                    "Access detailed profiles for over 60,000 public companies worldwide.",
                },
                {
                  icon: Globe,
                  title: "Global Coverage",
                  description:
                    "Data from 120+ countries and 70+ exchanges for truly global insights.",
                },
                {
                  icon: BarChart3,
                  title: "Industry Classification",
                  description:
                    "Precise industry and sector classifications for accurate peer comparisons.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                Explore company data
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Dashboard visualization */}
          <motion.div
            variants={dashboardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Dashboard header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      Company Overview
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-6 h-6 bg-gray-200 rounded-full"
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-6 h-6 bg-gray-200 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Company header */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center mb-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">T</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      TechVision Inc.
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">NASDAQ: TVSI</span>
                      <span className="flex items-center text-green-500">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +2.4%
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Company details */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="grid grid-cols-2 gap-4 mb-6"
                >
                  {[
                    { label: "Industry", value: "Software & Technology" },
                    { label: "Sector", value: "Information Technology" },
                    { label: "Country", value: "United States" },
                    { label: "Exchange", value: "NASDAQ" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Company description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gray-50 p-4 rounded-lg mb-6"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    Business Description
                  </p>
                  <p className="text-sm text-gray-700">
                    TechVision Inc. is a leading provider of cloud-based
                    software solutions for enterprise customers. The company
                    specializes in AI-powered analytics, cybersecurity, and
                    digital transformation services across multiple industries
                    including finance, healthcare, and manufacturing.
                  </p>
                </motion.div>

                {/* Key metrics */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { label: "Market Cap", value: "$24.7B" },
                    { label: "Employees", value: "12,450" },
                    { label: "Founded", value: "2005" },
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-50 p-3 rounded-lg"
                    >
                      <p className="text-xs text-blue-500 mb-1">
                        {metric.label}
                      </p>
                      <p className="font-bold">{metric.value}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyOverviewSection;
