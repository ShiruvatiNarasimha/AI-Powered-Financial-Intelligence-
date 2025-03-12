import {
  DollarSign,
  Globe,
  BarChart3,
  TrendingUp,
  TrendingDown,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const FinancialsSection = () => {
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

  const tableRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const chartVariants = {
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
      className="py-24 bg-gradient-to-b from-indigo-900 to-blue-800 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Dashboard visualization */}
          <motion.div
            variants={chartVariants}
            className="relative mb-12 lg:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Dashboard header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      Financial Statements
                    </span>
                  </div>
                  <motion.div
                    className="flex space-x-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded cursor-pointer"
                    >
                      Annual
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded cursor-pointer"
                    >
                      Quarterly
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Tabs */}
                <motion.div
                  variants={itemVariants}
                  className="flex border-b border-gray-200 mb-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium"
                  >
                    Income Statement
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-gray-500 font-medium"
                  >
                    Balance Sheet
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-gray-500 font-medium"
                  >
                    Cash Flow
                  </motion.button>
                </motion.div>

                {/* Financial data table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Metric
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          2022
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          2023
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          2024
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          YoY %
                        </th>
                      </tr>
                    </thead>
                    <motion.tbody
                      variants={containerVariants}
                      className="bg-white divide-y divide-gray-200"
                    >
                      {[
                        {
                          metric: "Revenue",
                          "2022": "4.2B",
                          "2023": "5.1B",
                          "2024": "6.3B",
                          yoy: "+23.5%",
                          trend: "up",
                        },
                        {
                          metric: "Gross Profit",
                          "2022": "2.8B",
                          "2023": "3.4B",
                          "2024": "4.2B",
                          yoy: "+23.5%",
                          trend: "up",
                        },
                        {
                          metric: "Operating Income",
                          "2022": "1.1B",
                          "2023": "1.4B",
                          "2024": "1.8B",
                          yoy: "+28.6%",
                          trend: "up",
                        },
                        {
                          metric: "Net Income",
                          "2022": "0.9B",
                          "2023": "1.2B",
                          "2024": "1.5B",
                          yoy: "+25.0%",
                          trend: "up",
                        },
                        {
                          metric: "EPS",
                          "2022": "$2.34",
                          "2023": "$3.12",
                          "2024": "$3.87",
                          yoy: "+24.0%",
                          trend: "up",
                        },
                        {
                          metric: "R&D Expenses",
                          "2022": "0.6B",
                          "2023": "0.7B",
                          "2024": "0.9B",
                          yoy: "+28.6%",
                          trend: "up",
                        },
                        {
                          metric: "SG&A Expenses",
                          "2022": "1.1B",
                          "2023": "1.3B",
                          "2024": "1.5B",
                          yoy: "+15.4%",
                          trend: "up",
                        },
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          variants={tableRowVariants}
                          custom={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                          whileHover={{
                            scale: 1.01,
                            backgroundColor: "#f8fafc",
                          }}
                        >
                          <td className="px-3 py-3 text-sm font-medium text-gray-900">
                            {row.metric}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {row["2022"]}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {row["2023"]}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-900 font-medium text-right">
                            {row["2024"]}
                          </td>
                          <td className="px-3 py-3 text-sm text-right">
                            <motion.span
                              className={`inline-flex items-center ${
                                row.trend === "up"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {row.trend === "up" ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {row.yoy}
                            </motion.span>
                          </td>
                        </motion.tr>
                      ))}
                    </motion.tbody>
                  </table>
                </div>

                {/* Chart visualization */}
                <motion.div
                  variants={chartVariants}
                  className="mt-6 h-48 bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Revenue Growth Trend
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">Revenue</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
                      <span className="text-xs text-gray-500">Net Income</span>
                    </div>
                  </div>
                  <motion.div
                    variants={containerVariants}
                    className="h-28 flex items-end space-x-2"
                  >
                    {[
                      { revenue: 30, income: 15 },
                      { revenue: 40, income: 20 },
                      { revenue: 45, income: 22 },
                      { revenue: 55, income: 25 },
                      { revenue: 60, income: 28 },
                      { revenue: 70, income: 32 },
                      { revenue: 80, income: 38 },
                      { revenue: 90, income: 42 },
                    ].map((data, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 flex flex-col items-center space-y-1"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          className="w-full bg-green-500 rounded-t"
                          style={{ height: `${data.income}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${data.income}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                        <motion.div
                          className="w-full bg-blue-500 rounded-t"
                          style={{ height: `${data.revenue - data.income}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${data.revenue - data.income}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
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

          {/* Right side - Text content */}
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-base font-semibold text-blue-300 tracking-wide uppercase"
            >
              Financial Data
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-2 text-3xl font-extrabold text-white sm:text-4xl"
            >
              Financials
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl text-blue-200"
            >
              Get access to up to 10 years of historical data for income
              statement, balance sheet and cash flow statement with quarter and
              yearly periods.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="mt-10 space-y-6"
            >
              {[
                {
                  icon: BarChart3,
                  title: "Comprehensive Financial Statements",
                  description:
                    "Access income statements, balance sheets, and cash flow statements with detailed line items.",
                },
                {
                  icon: TrendingUp,
                  title: "Historical Data",
                  description:
                    "View up to 10 years of historical financial data to analyze long-term trends.",
                },
                {
                  icon: DollarSign,
                  title: "Quarterly & Annual Reports",
                  description:
                    "Toggle between quarterly and annual data to analyze seasonal patterns and yearly growth.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
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
                Explore financial data
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinancialsSection;
