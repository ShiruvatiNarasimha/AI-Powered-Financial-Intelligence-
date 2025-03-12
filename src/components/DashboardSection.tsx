import { motion } from "framer-motion";
import dashboard from "../assets/images/dashboard.png";
import { Play } from "lucide-react";

const DashboardSection = () => {
  return (
    <div id="demo">
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl relative rounded-2xl overflow-hidden shadow-2xl border"
        >
          {/* Browser-style chrome */}
          <div className="h-12 bg-accent/20 flex items-center px-4 space-x-2 border-b">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* Animated dashboard elements */}
          <div className="relative bg-background">
            <img
              src={dashboard}
              alt="Dashboard preview"
              className="w-full h-auto object-contain"
              loading="lazy"
            />

            {/* Animated overlay elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            >
              <button className="flex items-center gap-2 text-white bg-primary rounded-full p-6 hover:bg-primary/90 transition-all">
                <Play className="h-8 w-8" />
                <span className="text-xl font-semibold">View Demo</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardSection;
