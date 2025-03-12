
import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LineChart, TrendingUp, Filter, ChevronDown } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  LineChart as ReLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const comparisonData = [
  { name: "Jan", AAPL: 12400, MSFT: 11398, GOOGL: 9800 },
  { name: "Feb", AAPL: 14210, MSFT: 12200, GOOGL: 10300 },
  { name: "Mar", AAPL: 13500, MSFT: 12800, GOOGL: 10800 },
  { name: "Apr", AAPL: 15200, MSFT: 13400, GOOGL: 11200 },
  { name: "May", AAPL: 16100, MSFT: 14300, GOOGL: 12100 },
  { name: "Jun", AAPL: 18200, MSFT: 15100, GOOGL: 13400 },
];

const financialRatios = [
  { metric: "P/E Ratio", AAPL: 28.5, MSFT: 32.1, GOOGL: 24.8, industry: 26.4 },
  { metric: "P/B Ratio", AAPL: 35.2, MSFT: 12.5, GOOGL: 5.3, industry: 10.6 },
  { metric: "ROE (%)", AAPL: 126.7, MSFT: 43.8, GOOGL: 23.5, industry: 29.7 },
  { metric: "ROA (%)", AAPL: 21.9, MSFT: 15.8, GOOGL: 12.6, industry: 13.5 },
  { metric: "Debt/Equity", AAPL: 1.7, MSFT: 0.4, GOOGL: 0.1, industry: 0.8 },
  { metric: "Net Margin (%)", AAPL: 25.9, MSFT: 34.6, GOOGL: 22.5, industry: 20.4 },
];

export default function Analysis() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Financial Analysis</h1>
          <p className="text-muted-foreground">Compare companies and analyze financial metrics</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
          
          <Select defaultValue="tech">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
              <SelectItem value="consumer">Consumer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="comparison" className="mb-8">
        <TabsList>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="ratios">Ratios</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
          <TabsTrigger value="custom">Custom Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="comparison" className="mt-6 space-y-6">
          <Card className="shadow-sm hover:shadow transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <LineChart className="mr-2 h-5 w-5 text-valueEq-blue" />
                    Revenue Comparison
                  </CardTitle>
                  <CardDescription>Quarterly revenue comparison (in millions)</CardDescription>
                </div>
                
                <div className="flex gap-3">
                  <Select defaultValue="6months">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3months">3 Months</SelectItem>
                      <SelectItem value="6months">6 Months</SelectItem>
                      <SelectItem value="1year">1 Year</SelectItem>
                      <SelectItem value="5years">5 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart
                    data={comparisonData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value}M`, '']}
                      itemStyle={{ color: '#111' }}
                      contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #eee' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="AAPL" 
                      stroke="#14b8a6" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                      animationDuration={1500}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="MSFT" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                      animationDuration={1500}
                      animationBegin={300}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="GOOGL" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                      animationDuration={1500}
                      animationBegin={600}
                    />
                  </ReLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-valueEq-teal" />
                Company Selection
              </CardTitle>
              <CardDescription>Add or remove companies from comparison</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-medium">Current Selection</div>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-valueEq-teal/10 text-valueEq-teal px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      AAPL
                    </div>
                    <div className="bg-valueEq-blue/10 text-valueEq-blue px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      MSFT
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      GOOGL
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <div className="flex gap-2">
                    <Input placeholder="Add company by ticker..." />
                    <Button>Add</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ratios" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Financial Ratios</CardTitle>
              <CardDescription>Key financial metrics comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pl-2 pr-4 font-medium">Metric</th>
                      <th className="text-right py-3 px-4 font-medium">AAPL</th>
                      <th className="text-right py-3 px-4 font-medium">MSFT</th>
                      <th className="text-right py-3 px-4 font-medium">GOOGL</th>
                      <th className="text-right py-3 px-4 font-medium">Industry Avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialRatios.map((ratio, index) => (
                      <tr 
                        key={index} 
                        className={`border-b transition-colors ${index % 2 === 0 ? 'hover:bg-gray-50' : 'bg-gray-50/50 hover:bg-gray-100/50'}`}
                      >
                        <td className="py-3 pl-2 pr-4 font-medium">{ratio.metric}</td>
                        <td className={`text-right py-3 px-4 ${ratio.AAPL > ratio.industry ? 'text-green-600' : ratio.AAPL < ratio.industry ? 'text-red-600' : ''}`}>
                          {ratio.AAPL.toFixed(1)}
                        </td>
                        <td className={`text-right py-3 px-4 ${ratio.MSFT > ratio.industry ? 'text-green-600' : ratio.MSFT < ratio.industry ? 'text-red-600' : ''}`}>
                          {ratio.MSFT.toFixed(1)}
                        </td>
                        <td className={`text-right py-3 px-4 ${ratio.GOOGL > ratio.industry ? 'text-green-600' : ratio.GOOGL < ratio.industry ? 'text-red-600' : ''}`}>
                          {ratio.GOOGL.toFixed(1)}
                        </td>
                        <td className="text-right py-3 px-4 font-medium">
                          {ratio.industry.toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="growth" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Growth Analysis</CardTitle>
              <CardDescription>Analyze company growth trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm text-muted-foreground py-10">
                Select companies to compare growth metrics.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="custom" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Analysis</CardTitle>
              <CardDescription>Build your own custom analysis models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm text-muted-foreground py-10">
                This feature allows you to create custom analysis models. Coming soon.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
