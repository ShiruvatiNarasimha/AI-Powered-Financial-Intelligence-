import { Globe, Database, BarChart3, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import map from "../assets/images/map.png";
import DashboardSection from "./DashboardSection";

const GlobalDataSection = () => {
  const stats = [
    { label: "Exchanges", value: "70+", icon: BarChart3 },
    { label: "Countries", value: "120+", icon: Globe },
    { label: "Listed Companies", value: "60,000+", icon: Database },
  ];

  return (
    <div className="py-4 bg-gradient-to-b from-indigo-900 to-blue-800  relative overflow-hidden">
      {/* Dashboard Section with glowing effect */}
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 flex justify-center items-center opacity-20">
        <div className="w-[1000px] h-[1000px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <DashboardSection />
        <div className="text-center mb-16 pt-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold text-blue-300 uppercase tracking-wider"
          >
            Global Coverage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-2 text-4xl font-extrabold text-white sm:text-5xl"
          >
            Global financial and business data from trusted partners
          </motion.p>
          <p className="mt-4 max-w-3xl text-lg text-blue-200 mx-auto">
            Access the world’s most comprehensive and up-to-date dataset for
            public companies, spanning 120+ countries, 70+ Exchanges and over 1
            million data-points
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center transform transition-all hover:scale-105 hover:bg-white/20"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-14 w-14 text-blue-300" />
              </div>
              <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-lg text-blue-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative flex items-center justify-center mt-16"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            src={map}
            alt="Global Coverage Map"
            height={1200}
            width={1200}
            className="rounded-3xl"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16 pb-6"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300 shadow-md"
          >
            Explore Global Coverage
            <TrendingUp className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalDataSection;
