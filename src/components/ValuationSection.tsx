import React from "react";
import {
  Calculator,
  TrendingUp,
  BarChart3,
  ChevronRight,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const ValuationSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">
              Valuation Metrics
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Valuation Ratios
            </p>
            <p className="mt-4 text-xl text-blue-200">
              Trust your trailing and forward valuation ratios calculated by our
              Valuation Experts with daily updates.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Calculator,
                  title: "Comprehensive Ratio Analysis",
                  description:
                    "Access over 30 different valuation metrics including P/E, EV/EBITDA, P/S, and more.",
                },
                {
                  icon: TrendingUp,
                  title: "Forward-Looking Estimates",
                  description:
                    "View forward-looking ratios based on analyst estimates to identify future opportunities.",
                },
                {
                  icon: BarChart3,
                  title: "Historical Comparison",
                  description:
                    "Compare current valuations against historical averages to identify potential mispricing.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-blue-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                Explore valuation metrics
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Dashboard visualization */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              {/* Dashboard header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      Valuation Dashboard
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      Trailing
                    </div>
                    <div className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      Forward
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Company header */}
                <div className="flex items-center mb-6">
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
                </div>

                {/* Valuation metrics grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      name: "P/E Ratio",
                      value: "24.3x",
                      change: "+2.1%",
                      color: "text-green-500",
                    },
                    {
                      name: "EV/EBITDA",
                      value: "12.7x",
                      change: "-1.3%",
                      color: "text-red-500",
                    },
                    {
                      name: "P/S Ratio",
                      value: "3.8x",
                      change: "+0.5%",
                      color: "text-green-500",
                    },
                    {
                      name: "P/B Ratio",
                      value: "5.2x",
                      change: "+1.7%",
                      color: "text-green-500",
                    },
                    {
                      name: "Dividend Yield",
                      value: "1.2%",
                      change: "-0.1%",
                      color: "text-red-500",
                    },
                    {
                      name: "FCF Yield",
                      value: "3.5%",
                      change: "+0.4%",
                      color: "text-green-500",
                    },
                  ].map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">{metric.name}</p>
                        <span
                          className={`text-xs ${metric.color} flex items-center`}
                        >
                          {metric.change}{" "}
                          <ArrowUpRight className="h-3 w-3 ml-1" />
                        </span>
                      </div>
                      <p className="text-xl font-bold mt-1">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Peer comparison */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    P/E Ratio - Peer Comparison
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        company: "TechVision Inc.",
                        value: 24.3,
                        width: "80%",
                        color: "bg-blue-500",
                      },
                      {
                        company: "Competitor A",
                        value: 22.1,
                        width: "73%",
                        color: "bg-gray-400",
                      },
                      {
                        company: "Competitor B",
                        value: 28.7,
                        width: "95%",
                        color: "bg-gray-400",
                      },
                      {
                        company: "Competitor C",
                        value: 19.5,
                        width: "65%",
                        color: "bg-gray-400",
                      },
                      {
                        company: "Industry Average",
                        value: 23.2,
                        width: "77%",
                        color: "bg-green-500",
                      },
                    ].map((peer, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span>{peer.company}</span>
                          <span>{peer.value}x</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${peer.color}`}
                            style={{ width: peer.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Historical trend */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Historical P/E Trend
                  </p>
                  <div className="h-32 flex items-end space-x-1">
                    {[
                      18.2, 19.5, 21.3, 20.7, 22.4, 23.1, 24.5, 23.8, 22.9,
                      24.3,
                    ].map((value, i) => (
                      <div
                        key={i}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600"
                          style={{ height: `${(value / 30) * 100}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-1">{`Q${
                          (i % 4) + 1
                        }`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationSection;
