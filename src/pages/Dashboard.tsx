
import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyScreener } from "@/components/company-screener";
import { BarChart, PieChart, ArrowLeft, TrendingUp, BarChart3, BadgeDollarSign } from "lucide-react";
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart as RePieChart, Pie, Cell, Legend } from "recharts";

const quarterlyData = [
  { name: "Q1", revenue: 10500 },
  { name: "Q2", revenue: 17800 },
  { name: "Q3", revenue: 14200 },
  { name: "Q4", revenue: 22000 },
];

const marketShareData = [
  { name: "Product A", value: 35 },
  { name: "Product B", value: 25 },
  { name: "Product C", value: 20 },
  { name: "Others", value: 20 },
];

const COLORS = ["#3b82f6", "#14b8a6", "#fbbf24", "#ef4444"];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Welcome to ValueEq Dashboard</h1>
        <p className="text-gray-500">Your financial intelligence platform for comprehensive company analysis and valuation.</p>
      </div>

      <Tabs defaultValue="company-screener" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="company-screener" className="text-sm">
            <BarChart3 className="w-4 h-4 mr-2" />
            Company Screener
          </TabsTrigger>
          <TabsTrigger value="overview" className="text-sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            Financial Overview
          </TabsTrigger>
          <TabsTrigger value="valuation" className="text-sm">
            <BadgeDollarSign className="w-4 h-4 mr-2" />
            Valuation Tools
          </TabsTrigger>
          <TabsTrigger value="watchlist" className="text-sm">
            <BarChart className="w-4 h-4 mr-2" />
            My Watchlist
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="company-screener" className="mt-0 animate-fade-in">
          <CompanyScreener />
        </TabsContent>
        
        <TabsContent value="overview" className="mt-0 space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Companies</CardTitle>
                <CardDescription>Total companies tracked</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">60,000+</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Countries</CardTitle>
                <CardDescription>Global coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">120+</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Data Points</CardTitle>
                <CardDescription>Analyzed metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1M+</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm hover:shadow transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BarChart className="mr-2 h-5 w-5 text-valueEq-blue" />
                    Quarterly Revenue
                  </CardTitle>
                  <CardDescription>Last 4 quarters performance</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart
                      data={quarterlyData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        labelFormatter={(label) => `Quarter: ${label}`}
                      />
                      <Bar 
                        dataKey="revenue" 
                        fill="#3b82f6" 
                        radius={[4, 4, 0, 0]}
                        animationDuration={1500}
                      />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg font-medium flex items-center">
                    <PieChart className="mr-2 h-5 w-5 text-valueEq-teal" />
                    Market Share
                  </CardTitle>
                  <CardDescription>Product category breakdown</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={marketShareData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                        animationDuration={1500}
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="valuation" className="mt-0 animate-fade-in">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Valuation Models</CardTitle>
              <CardDescription>Apply different valuation methodologies to selected companies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm text-muted-foreground py-10">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-valueEq-teal to-valueEq-blue">
                    <BadgeDollarSign className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2">Choose a Valuation Model</h3>
                <p className="max-w-md mx-auto mb-6">
                  Select a company from the screener or your watchlist first, then apply different valuation methodologies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <Card className="cursor-pointer hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">DCF Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-500">Discounted Cash Flow analysis</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Multiples</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-500">Comparable Company Analysis</p>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Dividend Model</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-500">Dividend Discount Model</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="watchlist" className="mt-0 animate-fade-in">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Your Watchlist</CardTitle>
              <CardDescription>Companies you're monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-sm text-muted-foreground py-10">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                    <BarChart className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2">Your watchlist is empty</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">
                  Add companies to your watchlist to track their performance and receive alerts about important changes.
                </p>
                <div className="flex justify-center gap-3">
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Browse Companies</button>
                  <button className="px-4 py-2 bg-valueEq-teal text-white rounded-md hover:bg-valueEq-teal/90">
                    Set Up Alerts
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
