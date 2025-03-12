import {
  Users,
  TrendingUp,
  BarChart3,
  ChevronRight,
  Download,
  Filter,
  Search,
} from "lucide-react";

const PeerGroupSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-indigo-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">
                      Peer Comparison
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-500 hover:text-blue-600">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-blue-600">
                      <Filter className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search companies..."
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-3 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Market Cap
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          P/E
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          EV/EBITDA
                        </th>
                        <th className="px-3 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revenue Growth
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        {
                          name: "TechVision Inc.",
                          ticker: "TVSI",
                          marketCap: "$24.7B",
                          pe: "24.3x",
                          evEbitda: "12.7x",
                          growth: "+23.5%",
                          highlight: true,
                        },
                        {
                          name: "DataSphere Corp",
                          ticker: "DSPH",
                          marketCap: "$18.3B",
                          pe: "22.1x",
                          evEbitda: "11.2x",
                          growth: "+18.7%",
                        },
                        {
                          name: "CloudNet Systems",
                          ticker: "CNSY",
                          marketCap: "$31.5B",
                          pe: "28.7x",
                          evEbitda: "14.5x",
                          growth: "+27.2%",
                        },
                        {
                          name: "AI Solutions Ltd",
                          ticker: "AISL",
                          marketCap: "$15.2B",
                          pe: "19.5x",
                          evEbitda: "9.8x",
                          growth: "+15.3%",
                        },
                        {
                          name: "Quantum Tech",
                          ticker: "QNTC",
                          marketCap: "$22.9B",
                          pe: "25.6x",
                          evEbitda: "13.1x",
                          growth: "+21.9%",
                        },
                        {
                          name: "Industry Average",
                          ticker: "",
                          marketCap: "$22.5B",
                          pe: "24.0x",
                          evEbitda: "12.3x",
                          growth: "+21.3%",
                          isAverage: true,
                        },
                      ].map((company, index) => (
                        <tr
                          key={index}
                          className={`${
                            company.highlight
                              ? "bg-blue-50"
                              : index % 2 === 0
                              ? "bg-white"
                              : "bg-gray-50"
                          } ${
                            company.isAverage ? "font-medium text-blue-600" : ""
                          }`}
                        >
                          <td className="px-3 py-3 text-sm">
                            <div className="font-medium text-gray-900">
                              {company.name}
                            </div>
                            {company.ticker && (
                              <div className="text-xs text-gray-500">
                                {company.ticker}
                              </div>
                            )}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {company.marketCap}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {company.pe}
                          </td>
                          <td className="px-3 py-3 text-sm text-gray-500 text-right">
                            {company.evEbitda}
                          </td>
                          <td className="px-3 py-3 text-sm text-right">
                            {company.growth && (
                              <span className="inline-flex items-center text-green-600">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {company.growth}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Visualization */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Peer Comparison - P/E vs Growth
                  </p>
                  <div className="h-48 relative">
                    {/* Y-axis label */}
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-500">
                      P/E Ratio
                    </div>

                    {/* X-axis label */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 mt-2">
                      Revenue Growth (%)
                    </div>

                    {/* Chart area */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Scatter plot points */}
                      <div
                        className="absolute h-4 w-4 bg-blue-500 rounded-full"
                        style={{ bottom: "30%", left: "60%" }}
                      >
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                          TVSI
                        </span>
                      </div>
                      <div
                        className="absolute h-3 w-3 bg-gray-400 rounded-full"
                        style={{ bottom: "25%", left: "45%" }}
                      >
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs">
                          DSPH
                        </span>
                      </div>
                      <div
                        className="absolute h-3 w-3 bg-gray-400 rounded-full"
                        style={{ bottom: "40%", left: "70%" }}
                      >
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs">
                          CNSY
                        </span>
                      </div>
                      <div
                        className="absolute h-3 w-3 bg-gray-400 rounded-full"
                        style={{ bottom: "20%", left: "35%" }}
                      >
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs">
                          AISL
                        </span>
                      </div>
                      <div
                        className="absolute h-3 w-3 bg-gray-400 rounded-full"
                        style={{ bottom: "35%", left: "55%" }}
                      >
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs">
                          QNTC
                        </span>
                      </div>

                      {/* Trend line */}
                      <div
                        className="absolute h-0.5 bg-blue-300 w-3/4 transform rotate-12"
                        style={{ bottom: "30%" }}
                      ></div>

                      {/* Axes */}
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
          </div>

          {/* Right side - Text content */}
          <div>
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">
              Competitive Analysis
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Peer Groups
            </p>
            <p className="mt-4 text-xl text-blue-200">
              Easily save and export your peer comparables for your current and
              future analysis.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Users,
                  title: "Custom Peer Groups",
                  description:
                    "Create and save custom peer groups based on industry, size, geography, or any criteria you choose.",
                },
                {
                  icon: BarChart3,
                  title: "Comprehensive Comparisons",
                  description:
                    "Compare companies across multiple metrics including valuation, growth, profitability, and more.",
                },
                {
                  icon: Download,
                  title: "Export & Share",
                  description:
                    "Export your peer analysis to Excel or PDF for presentations and further analysis.",
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300"
              >
                Create peer group
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerGroupSection;
