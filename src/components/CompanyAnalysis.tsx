import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  TrendingUp,
  PieChart,
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  Globe,
  BadgeDollarSign,
  LineChart,
  Scale,
  Activity,
  Brain,
  Target,
  Coins,
  BarChart as ChartBar,
  Calculator,
  TrendingDown,
} from "lucide-react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type TabType =
  | "Company Overview"
  | "AI-Insight"
  | "Financials"
  | "Estimates"
  | "Valuation Ratios"
  | "Dividends"
  | "Stock Chart";
type Period = "Q1 2024" | "Q4 2023" | "Q3 2023" | "Q2 2023";

// Helper Components
interface InfoCardProps {
  title: string;
  icon: React.ElementType;
  value: string;
  link?: boolean;
}

function InfoCard({ title, icon: Icon, value, link }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon size={18} className="text-cyan-400" />
        <h3 className="text-slate-300 text-sm">{title}</h3>
      </div>
      {link ? (
        <a
          href={`https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </motion.div>
  );
}

interface StatementCardProps {
  title: string;
  items: Array<{ label: string; value: string }>;
}

function StatementCard({ title, items }: StatementCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
    >
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-center"
          >
            <span className="text-slate-300">{item.label}</span>
            <span className="text-white font-medium">{item.value}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

interface InsightCardProps {
  icon: React.ElementType;
  title: string;
  sentiment: "Positive" | "Negative" | "Neutral";
  description: string;
}

function InsightCard({
  icon: Icon,
  title,
  sentiment,
  description,
}: InsightCardProps) {
  const sentimentColor = {
    Positive: "text-emerald-400",
    Negative: "text-rose-400",
    Neutral: "text-amber-400",
  }[sentiment];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon size={24} className="text-cyan-400" />
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <p className={`font-medium mb-2 ${sentimentColor}`}>{sentiment}</p>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
}

interface RatioCardProps {
  title: string;
  value: string;
  change: string;
}

function RatioCard({ title, value, change }: RatioCardProps) {
  const isPositive = !change.startsWith("-");
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
    >
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span
          className={`text-sm ${
            isPositive ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {change}
        </span>
      </div>
    </motion.div>
  );
}

interface DividendCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}

function DividendCard({
  title,
  value,
  description,
  icon: Icon,
}: DividendCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-slate-800/50 rounded-lg p-6 border border-slate-700"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon size={24} className="text-cyan-400" />
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <p className="text-2xl font-bold text-white mb-2">{value}</p>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
}

const generateStockData = (period: Period) => {
  const basePrice = 180;
  const dataPoints = 30;
  return Array.from({ length: dataPoints }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (dataPoints - i));
    const randomChange = (Math.random() - 0.5) * 10;
    return {
      date: date.toLocaleDateString(),
      price: basePrice + randomChange + i / 2,
      volume: Math.floor(Math.random() * 1000000) + 500000,
    };
  });
};

function CompanyAnalysis() {
  const [activeTab, setActiveTab] = useState<TabType>("Company Overview");
  const [activePeriod, setActivePeriod] = useState<Period>("Q1 2024");
  const periods: Period[] = ["Q1 2024", "Q4 2023", "Q3 2023", "Q2 2023"];
  const currentPeriodIndex = periods.indexOf(activePeriod);
  const [stockData, setStockData] = useState(() =>
    generateStockData(activePeriod)
  );

  const handlePeriodChange = (direction: "next" | "prev") => {
    if (direction === "next" && currentPeriodIndex > 0) {
      const newPeriod = periods[currentPeriodIndex - 1];
      setActivePeriod(newPeriod);
      setStockData(generateStockData(newPeriod));
    } else if (
      direction === "prev" &&
      currentPeriodIndex < periods.length - 1
    ) {
      const newPeriod = periods[currentPeriodIndex + 1];
      setActivePeriod(newPeriod);
      setStockData(generateStockData(newPeriod));
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Company Overview":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <InfoCard
              title="Company name"
              icon={Building2}
              value="Tesla Inc."
            />
            <InfoCard title="Symbol" icon={BadgeDollarSign} value="TSLA" />
            <InfoCard title="Exchange name" icon={Globe} value="NASDAQ" />
            <InfoCard title="Country" icon={Globe} value="United States" />
            <InfoCard title="Sector" icon={LineChart} value="Automotive" />
            <InfoCard
              title="Industry"
              icon={Activity}
              value="Electric Vehicles"
            />
            <InfoCard
              title="Number of employees"
              icon={Users}
              value="127,855"
            />
            <InfoCard
              title="Market Position"
              icon={Scale}
              value="Market Leader"
            />
            <InfoCard title="Website" icon={Globe} value="tesla.com" link />
          </motion.div>
        );
      case "AI-Insight":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              AI-Powered Analysis
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InsightCard
                icon={Brain}
                title="Market Sentiment"
                sentiment="Positive"
                description="Strong market position with increasing demand for electric vehicles. Recent price adjustments have improved market competitiveness."
              />
              <InsightCard
                icon={Target}
                title="Growth Potential"
                sentiment="Neutral"
                description="Moderate growth expected in the next quarter due to market competition and supply chain optimization efforts."
              />
              <InsightCard
                icon={Calculator}
                title="Financial Health"
                sentiment="Positive"
                description="Strong balance sheet with improving profit margins and healthy cash flow generation."
              />
              <InsightCard
                icon={ChartBar}
                title="Risk Assessment"
                sentiment="Neutral"
                description="Moderate risk level due to market competition and regulatory environment changes."
              />
            </div>
          </motion.div>
        );
      case "Financials":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              Financial Statements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatementCard
                title="Income Statement"
                items={[
                  { label: "Revenue", value: "$23.35B" },
                  { label: "Gross Profit", value: "$4.98B" },
                  { label: "Operating Income", value: "$2.12B" },
                  { label: "Net Income", value: "$1.85B" },
                ]}
              />
              <StatementCard
                title="Balance Sheet"
                items={[
                  { label: "Total Assets", value: "$68.12B" },
                  { label: "Total Liabilities", value: "$32.45B" },
                  { label: "Total Equity", value: "$35.67B" },
                  { label: "Cash & Equivalents", value: "$15.23B" },
                ]}
              />
              <StatementCard
                title="Cash Flow"
                items={[
                  { label: "Operating CF", value: "$4.25B" },
                  { label: "Investing CF", value: "-$2.15B" },
                  { label: "Financing CF", value: "-$1.12B" },
                  { label: "Free Cash Flow", value: "$2.10B" },
                ]}
              />
            </div>
          </motion.div>
        );
      case "Valuation Ratios":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              Key Valuation Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RatioCard title="PE Ratio" value="22.4x" change="+2.1" />
              <RatioCard title="EV/EBITDA" value="15.2x" change="-1.3" />
              <RatioCard title="Price/Book" value="4.8x" change="+0.3" />
              <RatioCard title="Price/Sales" value="2.1x" change="-0.2" />
              <RatioCard title="EV/Sales" value="2.8x" change="+0.1" />
              <RatioCard title="PEG Ratio" value="1.2x" change="-0.1" />
            </div>
          </motion.div>
        );
      case "Dividends":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              Dividend Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DividendCard
                title="Dividend Yield"
                value="No dividend"
                description="Tesla does not currently pay a dividend"
                icon={Coins}
              />
              <DividendCard
                title="Payout Ratio"
                value="0%"
                description="No dividend payout ratio available"
                icon={TrendingDown}
              />
            </div>
          </motion.div>
        );
      case "Stock Chart":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                Stock Price Chart
              </h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={stockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis
                      dataKey="date"
                      stroke="#94a3b8"
                      tick={{ fill: "#94a3b8" }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: "#94a3b8" }}
                      domain={["auto", "auto"]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #475569",
                        borderRadius: "0.5rem",
                      }}
                      labelStyle={{ color: "#94a3b8" }}
                      itemStyle={{ color: "#22d3ee" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#22d3ee"
                      strokeWidth={2}
                      dot={false}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-slate-300 mb-2">Opening Price</h4>
                  <p className="text-2xl font-bold text-white">
                    ${stockData[0].price.toFixed(2)}
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-slate-300 mb-2">Closing Price</h4>
                  <p className="text-2xl font-bold text-white">
                    ${stockData[stockData.length - 1].price.toFixed(2)}
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-slate-300 mb-2">Average Volume</h4>
                  <p className="text-2xl font-bold text-white">
                    {(
                      stockData.reduce((acc, curr) => acc + curr.volume, 0) /
                      stockData.length
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <p className="text-slate-400">
              Content for {activeTab} will be available soon
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}

      <main className="p-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text"
          >
            Analyze companies with tons of datapoints updated in real times
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-300 text-lg md:text-xl"
          >
            Stay ahead with comprehensive financial insights and real-time
            market data
          </motion.p>
        </div>

        {/* Main Analysis Grid */}
        <div className="max-w-7xl max-h-1xl mx-auto bg-slate-800/50 rounded-xl  p-6 backdrop-blur-sm border border-slate-700">
          {/* Period Selector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 flex items-center justify-center"
          >
            <span className="text-cyan-400 font-semibold text-lg">
              {activePeriod}
            </span>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-slate-700 pb-4">
            {[
              "Company Overview",
              "AI-Insight",
              "Financials",
              "Estimates",
              "Valuation Ratios",
              "Dividends",
              "Stock Chart",
            ].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab as TabType)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  tab === activeTab
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "hover:bg-slate-700 text-slate-300"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Revenue",
                icon: DollarSign,
                value: "$2.5B",
                change: "+12.3%",
              },
              {
                title: "EBITDA",
                icon: TrendingUp,
                value: "$892M",
                change: "+8.7%",
              },
              {
                title: "EV/EBITDA",
                icon: BarChart3,
                value: "15.2x",
                change: "-2.1%",
              },
              {
                title: "PE Ratio",
                icon: PieChart,
                value: "22.4x",
                change: "+5.4%",
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-slate-300">{metric.title}</h3>
                  <metric.icon className="text-cyan-400" size={20} />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-white">
                    {metric.value}
                  </span>
                  <span
                    className={`text-sm ${
                      metric.change.startsWith("+")
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <div className="min-h-[400px]">{renderTabContent()}</div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-700">
            <motion.button
              onClick={() => handlePeriodChange("prev")}
              disabled={currentPeriodIndex === periods.length - 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 transition-colors ${
                currentPeriodIndex === periods.length - 1
                  ? "text-slate-600 cursor-not-allowed"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              <ArrowLeft size={20} />
              <span>Previous Period</span>
            </motion.button>
            <motion.button
              onClick={() => handlePeriodChange("next")}
              disabled={currentPeriodIndex === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 transition-colors ${
                currentPeriodIndex === 0
                  ? "text-slate-600 cursor-not-allowed"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              <span>Next Period</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Footer Note */}
      </main>
    </div>
  );
}

export default CompanyAnalysis;
