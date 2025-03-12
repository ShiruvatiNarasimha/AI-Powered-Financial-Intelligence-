
import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BrainCircuit, TrendingUp, ArrowUpRight, ArrowDownRight, Search } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from "recharts";

const predictionData = [
  { month: "Jan", actual: 167.5, predicted: null },
  { month: "Feb", actual: 172.3, predicted: null },
  { month: "Mar", actual: 178.9, predicted: null },
  { month: "Apr", actual: 169.5, predicted: null },
  { month: "May", actual: 176.4, predicted: null },
  { month: "Jun", actual: 186.2, predicted: null },
  { month: "Jul", actual: 191.8, predicted: null },
  { month: "Aug", actual: 189.7, predicted: null },
  { month: "Sep", actual: 193.2, predicted: null },
  { month: "Oct", actual: 188.6, predicted: null },
  { month: "Nov", actual: 198.5, predicted: null },
  { month: "Dec", actual: 205.1, predicted: null },
  { month: "Jan", actual: null, predicted: 210.3 },
  { month: "Feb", actual: null, predicted: 214.8 },
  { month: "Mar", actual: null, predicted: 221.5 },
  { month: "Apr", actual: null, predicted: 219.7 },
  { month: "May", actual: null, predicted: 226.3 },
  { month: "Jun", actual: null, predicted: 230.8 },
];

const stockRecommendations = [
  { 
    ticker: "AAPL", 
    company: "Apple Inc.", 
    currentPrice: 205.2,
    targetPrice: 245.0,
    change: 19.4,
    recommendation: "Buy",
    aiConfidence: 92
  },
  { 
    ticker: "MSFT", 
    company: "Microsoft Corp.", 
    currentPrice: 350.4,
    targetPrice: 410.0,
    change: 17.0,
    recommendation: "Buy",
    aiConfidence: 89
  },
  { 
    ticker: "GOOGL", 
    company: "Alphabet Inc.", 
    currentPrice: 142.6,
    targetPrice: 165.0,
    change: 15.7,
    recommendation: "Buy",
    aiConfidence: 85
  },
  { 
    ticker: "AMZN", 
    company: "Amazon.com Inc.", 
    currentPrice: 167.4,
    targetPrice: 196.0,
    change: 17.1,
    recommendation: "Buy",
    aiConfidence: 87
  },
];

export default function AIPrediction() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold flex items-center">
            <BrainCircuit className="mr-2 h-6 w-6 text-valueEq-blue" />
            AI Prediction Engine
          </h1>
          <p className="text-muted-foreground">Advanced financial forecasting powered by AI</p>
        </div>
        
        <div className="flex gap-3">
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Forecast period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
              <SelectItem value="2years">2 Years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="shadow-sm hover:shadow transition-all duration-300 mb-6">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Input 
              placeholder="Enter stock ticker (e.g., AAPL)" 
              className="max-w-sm"
            />
            <Button>Analyze</Button>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-center py-6 text-muted-foreground text-sm">
            Enter a stock ticker to generate AI predictions
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="price" className="mb-8">
        <TabsList>
          <TabsTrigger value="price">Price Forecast</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="scenarios">Scenario Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="price" className="mt-6 space-y-6">
          <Card className="shadow-sm hover:shadow transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-valueEq-teal" />
                AAPL Stock Price Prediction
              </CardTitle>
              <CardDescription>Historical data and 6-month price forecast</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={predictionData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, '']}
                      itemStyle={{ color: '#111' }}
                      contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #eee' }}
                    />
                    <Legend />
                    <ReferenceLine x="Dec" stroke="#888" strokeDasharray="3 3" label="Current" />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Historical Price"
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                      animationDuration={1500}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      name="AI Prediction"
                      stroke="#14b8a6" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                      animationDuration={1500}
                      animationBegin={300}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 bg-gray-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Current Price</div>
                  <div className="text-2xl font-semibold">$205.10</div>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">6-Month Target</div>
                  <div className="text-2xl font-semibold text-valueEq-teal">$230.80</div>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Potential Return</div>
                  <div className="text-2xl font-semibold flex items-center text-green-600">
                    +12.5% <ArrowUpRight className="ml-1 h-5 w-5" />
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
          
          <Card className="shadow-sm hover:shadow transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">AI Analysis Summary</CardTitle>
              <CardDescription>Insights and key factors affecting the prediction</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="bg-valueEq-blue/5 p-4 rounded-lg">
                  <div className="font-medium mb-2">Key Drivers</div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Strong product cycle with new iPhone and MacBook releases</li>
                    <li>Services revenue growth exceeding expectations</li>
                    <li>Favorable market sentiment in tech sector</li>
                    <li>Stable supply chain conditions</li>
                  </ul>
                </div>
                
                <div className="bg-valueEq-teal/5 p-4 rounded-lg">
                  <div className="font-medium mb-2">Risk Factors</div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Potential regulatory challenges in key markets</li>
                    <li>Increased competition in wearables segment</li>
                    <li>Macroeconomic uncertainty and interest rate environment</li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <div className="font-medium mb-2">AI Confidence Score</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-valueEq-teal rounded-full" 
                      style={{ width: '87%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Low</span>
                    <span className="font-medium text-valueEq-teal">87%</span>
                    <span>High</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center">
                <BrainCircuit className="mr-2 h-5 w-5 text-valueEq-blue" />
                AI Stock Recommendations
              </CardTitle>
              <CardDescription>Top stocks based on AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pl-2 pr-4 font-medium">Ticker</th>
                      <th className="text-left py-3 px-4 font-medium">Company</th>
                      <th className="text-right py-3 px-4 font-medium">Current Price</th>
                      <th className="text-right py-3 px-4 font-medium">Target Price</th>
                      <th className="text-right py-3 px-4 font-medium">Potential Return</th>
                      <th className="text-center py-3 px-4 font-medium">Recommendation</th>
                      <th className="text-center py-3 px-4 font-medium">AI Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockRecommendations.map((stock, index) => (
                      <tr 
                        key={index} 
                        className={`border-b transition-colors ${index % 2 === 0 ? 'hover:bg-gray-50' : 'bg-gray-50/50 hover:bg-gray-100/50'}`}
                      >
                        <td className="py-3 pl-2 pr-4 font-medium">{stock.ticker}</td>
                        <td className="py-3 px-4">{stock.company}</td>
                        <td className="text-right py-3 px-4">${stock.currentPrice.toFixed(2)}</td>
                        <td className="text-right py-3 px-4">${stock.targetPrice.toFixed(2)}</td>
                        <td className="text-right py-3 px-4 flex items-center justify-end text-green-600">
                          +{stock.change.toFixed(1)}% <ArrowUpRight className="ml-1 h-4 w-4" />
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {stock.recommendation}
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 mx-auto">
                            <div 
                              className="bg-valueEq-teal h-2.5 rounded-full" 
                              style={{ width: `${stock.aiConfidence}%` }}
                            ></div>
                          </div>
                          <div className="text-xs font-medium">{stock.aiConfidence}%</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-medium">Find More Opportunities</div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="energy">Energy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-3 items-center">
                  <Search className="text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search for more stock recommendations..." 
                    className="flex-1"
                  />
                  <Button>Search</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scenarios" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Scenario Analysis</CardTitle>
              <CardDescription>Explore different market scenarios and their impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm text-muted-foreground py-10">
                Scenario analysis allows you to model different potential market outcomes.
                Select a stock to begin.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
