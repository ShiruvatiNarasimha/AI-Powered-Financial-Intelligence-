import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Bell,
  User,
  Globe,
  Sun,
  Moon,
  Settings,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchActive, setSearchActive] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notificationCount, setNotificationCount] = useState(3);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);

        // Animate navbar on scroll
        if (isScrolled) {
          controls.start({
            height: "4.5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          });
        } else {
          controls.start({
            height: "5rem",
            boxShadow: "none",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, controls]);

  // Focus search input when search is activated
  useEffect(() => {
    if (searchActive && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchActive]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const dismissNotification = () => {
    setNotificationCount(Math.max(0, notificationCount - 1));
  };

  const navItems = [
    {
      name: "Products",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Analytics Suite",
          description: "Advanced data visualization tools",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              A
            </div>
          ),
        },
        {
          name: "Automation",
          description: "Streamline your workflow",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
              B
            </div>
          ),
        },
        {
          name: "Integration",
          description: "Connect with your favorite tools",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
              C
            </div>
          ),
        },
        {
          name: "Enterprise",
          description: "Solutions for large organizations",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
              D
            </div>
          ),
        },
      ],
    },
    {
      name: "Solutions",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "For Startups",
          description: "Scale your business efficiently",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600">
              S
            </div>
          ),
        },
        {
          name: "For Enterprise",
          description: "Enterprise-grade security and support",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
              E
            </div>
          ),
        },
        {
          name: "For Teams",
          description: "Collaborate seamlessly",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
              T
            </div>
          ),
        },
        {
          name: "Case Studies",
          description: "Success stories from our clients",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
              C
            </div>
          ),
        },
      ],
    },
    {
      name: "Pricing",
      hasDropdown: false,
    },
    {
      name: "Resources",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Documentation",
          description: "Guides and API references",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              <HelpCircle size={16} />
            </div>
          ),
        },
        {
          name: "Blog",
          description: "Latest news and updates",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
              <ExternalLink size={16} />
            </div>
          ),
        },
        {
          name: "Webinars",
          description: "Educational video content",
          icon: (
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
              <Settings size={16} />
            </div>
          ),
        },
      ],
    },
    {
      name: "Contact",
      hasDropdown: false,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "New feature available",
      description: "Check out our latest AI-powered analytics tools",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      title: "Your report is ready",
      description: "Q2 Financial Analysis has been completed",
      time: "Yesterday",
      unread: true,
    },
    {
      id: 3,
      title: "System update",
      description: "We've improved our data processing speed by 30%",
      time: "3 days ago",
      unread: true,
    },
  ];

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isOpen || searchActive
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <motion.div
        animate={controls}
        initial={{ height: "5rem" }}
        className="container mx-auto flex items-center justify-between px-6"
      >
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm"
          >
            valueEq
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <button
                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                className={`px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center ${
                  activeDropdown === item.name ? "text-blue-600 bg-blue-50" : ""
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Enhanced Dropdown Menu */}
              <AnimatePresence>
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="py-3 px-2">
                      {item.dropdownItems &&
                        item.dropdownItems.map((dropdownItem, idx) => (
                          <motion.a
                            key={
                              typeof dropdownItem === "string"
                                ? dropdownItem
                                : dropdownItem.name
                            }
                            href="#"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * idx }}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {typeof dropdownItem === "string" ? (
                              dropdownItem
                            ) : (
                              <>
                                {dropdownItem.icon}
                                <div>
                                  <div className="font-medium">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </>
                            )}
                          </motion.a>
                        ))}
                    </div>
                    <div className="bg-gray-50 py-2 px-3 border-t border-gray-100">
                      <a
                        href="#"
                        className="flex items-center justify-between text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <span>View all {item.name.toLowerCase()}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          {/* Search Bar */}
          <AnimatePresence>
            {searchActive ? (
              <motion.div
                initial={{ width: 40, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 40, opacity: 0 }}
                className="relative"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-9 pr-4 rounded-full text-sm border border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none"
                  onBlur={() => setTimeout(() => setSearchActive(false), 200)}
                />
                <Search
                  size={16}
                  className="absolute left-3 top-2.5 text-gray-400"
                />
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setSearchActive(true)}
              >
                <Search size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          {/* Language Selector */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Globe size={20} />
          </motion.button>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="relative"
          >
            <button
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors relative"
              onClick={() => toggleDropdown("notifications")}
            >
              <Bell size={20} />
              {notificationCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                >
                  {notificationCount}
                </motion.span>
              )}
            </button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {activeDropdown === "notifications" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-1 w-80 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                  style={{ transformOrigin: "top right" }}
                >
                  <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">
                      Notifications
                    </h3>
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      Mark all as read
                    </button>
                  </div>
                  <div className="py-2 max-h-[320px] overflow-y-auto">
                    {notifications.map((notification, idx) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className={`px-4 py-3 hover:bg-gray-50 border-l-2 ${
                          notification.unread
                            ? "border-blue-500 bg-blue-50/30"
                            : "border-transparent"
                        }`}
                      >
                        <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-gray-800">
                            {notification.title}
                          </h4>
                          <button
                            className="text-gray-400 hover:text-gray-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              dismissNotification();
                            }}
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notification.time}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-3 border-t border-gray-100 text-center">
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all notifications
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="h-6 w-px bg-gray-200 mx-1"></div>

          {/* User Menu */}

          {/* <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 px-5 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </motion.button> */}
          <nav className="container mx-auto px-6 py-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="ml-2 px-5 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <AnimatePresence>
            {searchActive ? (
              <motion.div
                initial={{ width: 40, opacity: 0 }}
                animate={{ width: 160, opacity: 1 }}
                exit={{ width: 40, opacity: 0 }}
                className="relative"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full py-1.5 pl-8 pr-4 rounded-full text-sm border border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none"
                  onBlur={() => setTimeout(() => setSearchActive(false), 200)}
                />
                <Search
                  size={14}
                  className="absolute left-2.5 top-2 text-gray-400"
                />
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setSearchActive(true)}
              >
                <Search size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors relative"
          >
            <Bell size={20} />
            {notificationCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
              >
                {notificationCount}
              </motion.span>
            )}
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="container mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.name)
                    }
                    className="w-full py-3 flex justify-between items-center text-gray-700 hover:text-blue-600"
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 pb-2 space-y-1 overflow-hidden"
                      >
                        {item.dropdownItems &&
                          item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={
                                typeof dropdownItem === "string"
                                  ? dropdownItem
                                  : dropdownItem.name
                              }
                              href="#"
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {typeof dropdownItem === "string"
                                ? dropdownItem
                                : dropdownItem.name}
                            </a>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <div className="flex space-x-2 justify-center">
                  <button
                    className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  </button>
                  <button className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <Globe size={20} />
                  </button>
                  <button className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <Settings size={20} />
                  </button>
                </div>

                <button className="w-full py-2.5 text-sm font-medium rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                  Log in
                </button>
                <button className="w-full py-2.5 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-sm transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar at the top of the page */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: scrolled ? 0.3 : 0,
          opacity: scrolled ? 1 : 0,
        }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-full origin-left"
      />
    </motion.header>
  );
};

export default Navbar;
