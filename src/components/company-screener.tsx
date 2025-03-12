// import React, { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Lightbulb, Search, Sliders } from "lucide-react";
// import { SparkleIcon } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Checkbox } from "@/components/ui/checkbox";

// // Sample company data for the first table
// const companyData1 = [
//   {
//     id: 1,
//     name: "NextEra Energy, Inc.",
//     ticker: "NEE",
//     marketCap: "146,972M",
//     enterpriseValue: "258,372M",
//     evSalesFY: "10.44x",
//     evSalesFY1: "8.52x",
//     evSalesFY2: "7.96x",
//     evEbitdaLTM: "20.06x",
//     evEbitdaFY1: "14.87x",
//     evEbitdaFY2: "13.17x",
//     evEbitFY: "36.31x",
//     evEbitFY1: "24.72x",
//   },
//   {
//     id: 2,
//     name: "The Southern Company",
//     ticker: "SO",
//     marketCap: "92,476M",
//     enterpriseValue: "172,731M",
//     evSalesFY: "6.54x",
//     evSalesFY1: "6.27x",
//     evSalesFY2: "6.11x",
//     evEbitdaLTM: "13.08x",
//     evEbitdaFY1: "13.68x",
//     evEbitdaFY2: "12.71x",
//     evEbitFY: "21.59x",
//     evEbitFY1: "23.71x",
//   },
//   {
//     id: 3,
//     name: "GE Vernova Inc.",
//     ticker: "GEV",
//     marketCap: "96,333M",
//     enterpriseValue: "99,555M",
//     evSalesFY: "2.85x",
//     evSalesFY1: "2.72x",
//     evSalesFY2: "2.49x",
//     evEbitdaLTM: "45.69x",
//     evEbitdaFY1: "31.96x",
//     evEbitdaFY2: "21.11x",
//     evEbitFY: "98.86x",
//     evEbitFY1: "49.52x",
//   },
//   {
//     id: 4,
//     name: "Constellation Energy Corporation",
//     ticker: "CEG",
//     marketCap: "86,186M",
//     enterpriseValue: "115,685M",
//     evSalesFY: "4.82x",
//     evSalesFY1: "5.28x",
//     evSalesFY2: "5.31x",
//     evEbitdaLTM: "19.29x",
//     evEbitdaFY1: "23.52x",
//     evEbitdaFY2: "22.02x",
//     evEbitFY: "35.35x",
//     evEbitFY1: "29.70x",
//   },
//   {
//     id: 5,
//     name: "American Electric Power Company",
//     ticker: "AEP",
//     marketCap: "51,548M",
//     enterpriseValue: "107,964M",
//     evSalesFY: "5.51x",
//     evSalesFY1: "5.02x",
//     evSalesFY2: "4.92x",
//     evEbitdaLTM: "14.74x",
//     evEbitdaFY1: "12.32x",
//     evEbitdaFY2: "11.47x",
//     evEbitFY: "26.04x",
//     evEbitFY1: "20.92x",
//   },
// ];

// // Sample company data for the second table
// const companyData2 = [
//   {
//     id: 1,
//     name: "Apple Inc.",
//     ticker: "AAPL",
//     exchange: "NASDAQ",
//     industry: "Consumer Electronics",
//     sector: "Technology",
//     description:
//       "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
//     country: "United States of America",
//     region: "United States and Canada",
//     employees: "150,000",
//     activelyTraded: "Yes",
//   },
//   {
//     id: 2,
//     name: "NVIDIA Corporation",
//     ticker: "NVDA",
//     exchange: "NASDAQ",
//     industry: "Semiconductors",
//     sector: "Technology",
//     description:
//       "NVIDIA Corporation provides graphics, computing and networking solutions.",
//     country: "United States of America",
//     region: "United States and Canada",
//     employees: "29,600",
//     activelyTraded: "Yes",
//   },
//   {
//     id: 3,
//     name: "Microsoft Corporation",
//     ticker: "MSFT",
//     exchange: "NASDAQ",
//     industry: "Software - Infrastructure",
//     sector: "Technology",
//     description:
//       "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.",
//     country: "United States of America",
//     region: "United States and Canada",
//     employees: "228,000",
//     activelyTraded: "Yes",
//   },
//   {
//     id: 4,
//     name: "Amazon.com, Inc.",
//     ticker: "AMZN",
//     exchange: "NASDAQ",
//     industry: "Specialty Retail",
//     sector: "Consumer Cyclical",
//     description:
//       "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores.",
//     country: "United States of America",
//     region: "United States and Canada",
//     employees: "2M",
//     activelyTraded: "Yes",
//   },
//   {
//     id: 5,
//     name: "Alphabet Inc.",
//     ticker: "GOOGL",
//     exchange: "NASDAQ",
//     industry: "Internet Content & Information",
//     sector: "Communication Services",
//     description:
//       "Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.",
//     country: "United States of America",
//     region: "United States and Canada",
//     employees: "183,323",
//     activelyTraded: "Yes",
//   },
// ];

// // Filter badges to reflect the image
// const filterBadges = [
//   { id: 1, label: "Actively Traded", condition: "Equal to", value: "Yes" },
//   { id: 2, label: "Sector", condition: "Equal to", value: "Utilities" },
//   { id: 3, label: "ROE LTM", condition: "Greater than", value: "10%" },
//   {
//     id: 4,
//     label: "Number of Analysts' estimates",
//     condition: "Greater than",
//     value: "2",
//   },
// ];

// export const CompanyScreener = () => {
//   const [activeTab, setActiveTab] = useState("summary");
//   const [activeView, setActiveView] = useState("classic");
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center gap-2">
//           <h2 className="text-xl font-medium text-valueEq-teal">Screener</h2>
//           <div className="flex gap-1">
//             <Button
//               variant={activeView === "classic" ? "default" : "outline"}
//               size="sm"
//               className={
//                 activeView === "classic" ? "bg-valueEq-blue text-white" : ""
//               }
//               onClick={() => setActiveView("classic")}
//             >
//               Classic Filters
//             </Button>
//             <Button
//               variant={activeView === "ai" ? "default" : "outline"}
//               size="sm"
//               className={
//                 activeView === "ai" ? "bg-valueEq-blue text-white" : ""
//               }
//               onClick={() => setActiveView("ai")}
//             >
//               <SparkleIcon className="w-4 h-4 mr-1" />
//               AI Screener
//             </Button>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="flex items-center gap-1.5"
//           >
//             <Sliders className="w-4 h-4" />
//             Classic Filter
//           </Button>
//           <Button
//             size="sm"
//             className="bg-valueEq-teal hover:bg-valueEq-teal/90 flex items-center gap-1.5"
//           >
//             <SparkleIcon className="w-4 h-4" />
//             AI Screener
//           </Button>
//         </div>
//       </div>

//       {activeView === "classic" && (
//         <>
//           <div className="mb-4">
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <div className="text-sm font-medium">Select metric</div>
//                 <div className="relative">
//                   <div className="absolute -top-10 right-0">
//                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 "></div>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500">19 results</div>
//             </div>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {filterBadges.map((badge) => (
//                 <Badge
//                   key={badge.id}
//                   variant="outline"
//                   className="flex items-center gap-1 px-3 py-1.5 bg-blue-50"
//                 >
//                   <span className="font-medium">{badge.label}</span>
//                   <span className="text-gray-500">{badge.condition}</span>
//                   <span>{badge.value}</span>
//                   <button className="ml-1 rounded-full hover:bg-gray-200 p-0.5">
//                     ×
//                   </button>
//                 </Badge>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 gap-4">
//               <Card className="border-0 shadow-sm">
//                 <CardContent className="p-0">
//                   <Tabs defaultValue="summary" className="w-full">
//                     <TabsList className="grid grid-cols-7 h-auto p-0 bg-transparent border-b">
//                       <TabsTrigger
//                         value="summary"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                       >
//                         Screener Summary
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="profile"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                       >
//                         Profile
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="financials"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                       >
//                         Financials
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="valuation"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none bg-transparent"
//                       >
//                         Valuation
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="growth"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                       >
//                         Growth
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="risk"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                       >
//                         Risk
//                       </TabsTrigger>
//                       <TabsTrigger
//                         value="efficiency"
//                         className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                       >
//                         Efficiency
//                       </TabsTrigger>
//                     </TabsList>

//                     <TabsContent value="summary" className="mt-0 p-0">
//                       <div className="overflow-x-auto">
//                         <table className="w-full">
//                           <thead>
//                             <tr className="bg-gray-50">
//                               <th className="p-2.5 border-b text-left w-10">
//                                 <Checkbox id="select-all" />
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Name
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 Market Cap
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 Enterprise Value
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/Sales FY
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/Sales FY+1
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/Sales FY+2
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/EBITDA LTM
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/EBITDA FY+1
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/EBITDA FY+2
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/EBIT FY
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 EV/EBIT FY+1
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {companyData1.map((company) => (
//                               <tr key={company.id} className="hover:bg-gray-50">
//                                 <td className="p-2.5 border-b text-left">
//                                   <Checkbox id={`select-${company.id}`} />
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   <div className="font-medium">
//                                     {company.name}
//                                   </div>
//                                   <div className="text-xs text-gray-500">
//                                     {company.ticker}
//                                   </div>
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.marketCap}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.enterpriseValue}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evSalesFY}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evSalesFY1}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evSalesFY2}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evEbitdaLTM}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evEbitdaFY1}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evEbitdaFY2}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evEbitFY}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.evEbitFY1}
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </TabsContent>

//                     <TabsContent value="profile" className="mt-0 p-0">
//                       <div className="overflow-x-auto">
//                         <table className="w-full">
//                           <thead>
//                             <tr className="bg-gray-50">
//                               <th className="p-2.5 border-b text-left w-10">
//                                 <Checkbox id="select-all-profile" />
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Name
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Exchange
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Industry
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Sector
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Description
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Country
//                               </th>
//                               <th className="p-2.5 border-b text-left font-medium text-sm">
//                                 Region
//                               </th>
//                               <th className="p-2.5 border-b text-right font-medium text-sm">
//                                 Full Time Employees
//                               </th>
//                               <th className="p-2.5 border-b text-center font-medium text-sm">
//                                 Actively Traded
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {companyData2.map((company) => (
//                               <tr key={company.id} className="hover:bg-gray-50">
//                                 <td className="p-2.5 border-b text-left">
//                                   <Checkbox
//                                     id={`select-profile-${company.id}`}
//                                   />
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   <div className="font-medium">
//                                     {company.name}
//                                   </div>
//                                   <div className="text-xs text-gray-500">
//                                     {company.ticker}
//                                   </div>
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   {company.exchange}
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   {company.industry}
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   {company.sector}
//                                 </td>
//                                 <td className="p-2.5 border-b max-w-xs truncate">
//                                   {company.description}
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   {company.country}
//                                 </td>
//                                 <td className="p-2.5 border-b">
//                                   {company.region}
//                                 </td>
//                                 <td className="p-2.5 border-b text-right">
//                                   {company.employees}
//                                 </td>
//                                 <td className="p-2.5 border-b text-center">
//                                   {company.activelyTraded}
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </TabsContent>

//                     <TabsContent
//                       value="valuation"
//                       className="mt-0 pt-8 px-4 pb-4"
//                     >
//                       <div className="flex justify-between mb-4">
//                         <Button className="float-right bg-valueEq-teal hover:bg-valueEq-teal/90">
//                           Add View
//                         </Button>
//                       </div>
//                       <div className="text-center py-8">
//                         <div className="mb-4">
//                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                             <Search className="w-8 h-8 text-gray-400" />
//                           </div>
//                         </div>
//                         <h3 className="text-xl font-medium mb-2">
//                           Select companies to analyze
//                         </h3>
//                         <p className="text-gray-500 max-w-md mx-auto">
//                           Use the checkboxes to select companies from the table
//                           to view detailed valuation metrics and comparisons.
//                         </p>
//                       </div>
//                     </TabsContent>

//                     <TabsContent
//                       value="financials"
//                       className="mt-0 pt-8 px-4 pb-4"
//                     >
//                       <div className="text-center py-8">
//                         <div className="mb-4">
//                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                             <Search className="w-8 h-8 text-gray-400" />
//                           </div>
//                         </div>
//                         <h3 className="text-xl font-medium mb-2">
//                           Select companies to analyze
//                         </h3>
//                         <p className="text-gray-500 max-w-md mx-auto">
//                           Use the checkboxes to select companies from the table
//                           to view detailed financial metrics and comparisons.
//                         </p>
//                       </div>
//                     </TabsContent>

//                     <TabsContent value="growth" className="mt-0 pt-8 px-4 pb-4">
//                       <div className="text-center py-8">
//                         <div className="mb-4">
//                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                             <Search className="w-8 h-8 text-gray-400" />
//                           </div>
//                         </div>
//                         <h3 className="text-xl font-medium mb-2">
//                           Select companies to analyze
//                         </h3>
//                         <p className="text-gray-500 max-w-md mx-auto">
//                           Use the checkboxes to select companies from the table
//                           to view detailed growth metrics and comparisons.
//                         </p>
//                       </div>
//                     </TabsContent>

//                     <TabsContent value="risk" className="mt-0 pt-8 px-4 pb-4">
//                       <div className="text-center py-8">
//                         <div className="mb-4">
//                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                             <Search className="w-8 h-8 text-gray-400" />
//                           </div>
//                         </div>
//                         <h3 className="text-xl font-medium mb-2">
//                           Select companies to analyze
//                         </h3>
//                         <p className="text-gray-500 max-w-md mx-auto">
//                           Use the checkboxes to select companies from the table
//                           to view detailed risk metrics and comparisons.
//                         </p>
//                       </div>
//                     </TabsContent>

//                     <TabsContent
//                       value="efficiency"
//                       className="mt-0 pt-8 px-4 pb-4"
//                     >
//                       <div className="text-center py-8">
//                         <div className="mb-4">
//                           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                             <Search className="w-8 h-8 text-gray-400" />
//                           </div>
//                         </div>
//                         <h3 className="text-xl font-medium mb-2">
//                           Select companies to analyze
//                         </h3>
//                         <p className="text-gray-500 max-w-md mx-auto">
//                           Use the checkboxes to select companies from the table
//                           to view detailed efficiency metrics and comparisons.
//                         </p>
//                       </div>
//                     </TabsContent>
//                   </Tabs>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </>
//       )}

//       {activeView === "ai" && (
//         <div className="mb-4">
//           <Card className="border-0 shadow-sm mb-4">
//             <CardContent className="p-4">
//               <div className="flex flex-col">
//                 <div className="relative w-full">
//                   <textarea
//                     className="w-full h-32 px-4 py-3 border rounded-md focus:ring-2 focus:ring-valueEq-teal focus:border-transparent resize-none"
//                     placeholder="Type your query in any language (e.g., 'Find companies with ROE > 10% in Utilities, USA')"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <Button className="absolute bottom-3 right-3 bg-valueEq-teal hover:bg-valueEq-teal/90">
//                     <SparkleIcon className="w-4 h-4 mr-1" />
//                     Run AI Search
//                   </Button>
//                 </div>
//                 <div className="flex items-center mt-2 text-sm text-amber-600">
//                   <Lightbulb className="w-4 h-4 mr-1" />
//                   <span>
//                     Our AI understands all languages! Type your search in
//                     French, English, Spanish, etc.
//                   </span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-sm">
//             <CardContent className="p-0">
//               <Tabs defaultValue="summary" className="w-full">
//                 <TabsList className="grid grid-cols-7 h-auto p-0 bg-transparent border-b">
//                   <TabsTrigger
//                     value="summary"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                   >
//                     Screener Summary
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="profile"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                   >
//                     Profile
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="financials"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                   >
//                     Financials
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="valuation"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none bg-transparent"
//                   >
//                     Valuation
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="growth"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                   >
//                     Growth
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="risk"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                   >
//                     Risk
//                   </TabsTrigger>
//                   <TabsTrigger
//                     value="efficiency"
//                     className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal data-[state=active]:shadow-none rounded-none"
//                   >
//                     Efficiency
//                   </TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="profile" className="mt-0 p-0">
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="bg-gray-50">
//                           <th className="p-2.5 border-b text-left w-10">
//                             <Checkbox id="select-all-profile-ai" />
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Name
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Exchange
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Industry
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Sector
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Description
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Country
//                           </th>
//                           <th className="p-2.5 border-b text-left font-medium text-sm">
//                             Region
//                           </th>
//                           <th className="p-2.5 border-b text-right font-medium text-sm">
//                             Full Time Employees
//                           </th>
//                           <th className="p-2.5 border-b text-center font-medium text-sm">
//                             Actively Traded
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {companyData2.map((company) => (
//                           <tr key={company.id} className="hover:bg-gray-50">
//                             <td className="p-2.5 border-b text-left">
//                               <Checkbox
//                                 id={`select-profile-ai-${company.id}`}
//                               />
//                             </td>
//                             <td className="p-2.5 border-b">
//                               <div className="font-medium">{company.name}</div>
//                               <div className="text-xs text-gray-500">
//                                 {company.ticker}
//                               </div>
//                             </td>
//                             <td className="p-2.5 border-b">
//                               {company.exchange}
//                             </td>
//                             <td className="p-2.5 border-b">
//                               {company.industry}
//                             </td>
//                             <td className="p-2.5 border-b">{company.sector}</td>
//                             <td className="p-2.5 border-b max-w-xs truncate">
//                               {company.description}
//                             </td>
//                             <td className="p-2.5 border-b">
//                               {company.country}
//                             </td>
//                             <td className="p-2.5 border-b">{company.region}</td>
//                             <td className="p-2.5 border-b text-right">
//                               {company.employees}
//                             </td>
//                             <td className="p-2.5 border-b text-center">
//                               {company.activelyTraded}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="summary" className="mt-0 p-4 text-center">
//                   <div className="py-8">
//                     <div className="mb-4">
//                       <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                         <SparkleIcon className="w-8 h-8 text-valueEq-teal" />
//                       </div>
//                     </div>
//                     <h3 className="text-xl font-medium mb-2">
//                       Run an AI query to see results
//                     </h3>
//                     <p className="text-gray-500 max-w-md mx-auto">
//                       Type a query in the search box above using natural
//                       language to find companies matching your criteria.
//                     </p>
//                     <div className="mt-4">
//                       <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer px-3 py-1.5 text-sm mr-2">
//                         Find tech companies with P/E &lt; 20
//                       </Badge>
//                       <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer px-3 py-1.5 text-sm mr-2">
//                         Companies with high dividend yield
//                       </Badge>
//                       <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer px-3 py-1.5 text-sm">
//                         US energy companies with low debt
//                       </Badge>
//                     </div>
//                   </div>
//                 </TabsContent>

//                 {[
//                   "financials",
//                   "valuation",
//                   "growth",
//                   "risk",
//                   "efficiency",
//                 ].map((tab) => (
//                   <TabsContent
//                     key={tab}
//                     value={tab}
//                     className="mt-0 pt-8 px-4 pb-4"
//                   >
//                     <div className="text-center py-8">
//                       <div className="mb-4">
//                         <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
//                           <Search className="w-8 h-8 text-gray-400" />
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-medium mb-2">
//                         Run an AI query first
//                       </h3>
//                       <p className="text-gray-500 max-w-md mx-auto">
//                         Type a query in the search box above to find companies,
//                         then select them to see detailed {tab} information.
//                       </p>
//                     </div>
//                   </TabsContent>
//                 ))}
//               </Tabs>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lightbulb, Search, Sliders, Download } from "lucide-react";
import { SparkleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample company data for the first table
const companyData1 = [
  {
    id: 1,
    name: "NextEra Energy, Inc.",
    ticker: "NEE",
    marketCap: "146,972M",
    enterpriseValue: "258,372M",
    evSalesFY: "10.44x",
    evSalesFY1: "8.52x",
    evSalesFY2: "7.96x",
    evEbitdaLTM: "20.06x",
    evEbitdaFY1: "14.87x",
    evEbitdaFY2: "13.17x",
    evEbitFY: "36.31x",
    evEbitFY1: "24.72x",
  },
  {
    id: 2,
    name: "The Southern Company",
    ticker: "SO",
    marketCap: "92,476M",
    enterpriseValue: "172,731M",
    evSalesFY: "6.54x",
    evSalesFY1: "6.27x",
    evSalesFY2: "6.11x",
    evEbitdaLTM: "13.08x",
    evEbitdaFY1: "13.68x",
    evEbitdaFY2: "12.71x",
    evEbitFY: "21.59x",
    evEbitFY1: "23.71x",
  },
  {
    id: 3,
    name: "GE Vernova Inc.",
    ticker: "GEV",
    marketCap: "96,333M",
    enterpriseValue: "99,555M",
    evSalesFY: "2.85x",
    evSalesFY1: "2.72x",
    evSalesFY2: "2.49x",
    evEbitdaLTM: "45.69x",
    evEbitdaFY1: "31.96x",
    evEbitdaFY2: "21.11x",
    evEbitFY: "98.86x",
    evEbitFY1: "49.52x",
  },
  {
    id: 4,
    name: "Constellation Energy Corporation",
    ticker: "CEG",
    marketCap: "86,186M",
    enterpriseValue: "115,685M",
    evSalesFY: "4.82x",
    evSalesFY1: "5.28x",
    evSalesFY2: "5.31x",
    evEbitdaLTM: "19.29x",
    evEbitdaFY1: "23.52x",
    evEbitdaFY2: "22.02x",
    evEbitFY: "35.35x",
    evEbitFY1: "29.70x",
  },
  {
    id: 5,
    name: "American Electric Power Company",
    ticker: "AEP",
    marketCap: "51,548M",
    enterpriseValue: "107,964M",
    evSalesFY: "5.51x",
    evSalesFY1: "5.02x",
    evSalesFY2: "4.92x",
    evEbitdaLTM: "14.74x",
    evEbitdaFY1: "12.32x",
    evEbitdaFY2: "11.47x",
    evEbitFY: "26.04x",
    evEbitFY1: "20.92x",
  },
];

// Sample company data for the second table
const companyData2 = [
  {
    id: 1,
    name: "Apple Inc.",
    ticker: "AAPL",
    exchange: "NASDAQ",
    industry: "Consumer Electronics",
    sector: "Technology",
    description:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
    country: "United States of America",
    region: "United States and Canada",
    employees: "150,000",
    activelyTraded: "Yes",
  },
  {
    id: 2,
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    exchange: "NASDAQ",
    industry: "Semiconductors",
    sector: "Technology",
    description:
      "NVIDIA Corporation provides graphics, computing and networking solutions.",
    country: "United States of America",
    region: "United States and Canada",
    employees: "29,600",
    activelyTraded: "Yes",
  },
  {
    id: 3,
    name: "Microsoft Corporation",
    ticker: "MSFT",
    exchange: "NASDAQ",
    industry: "Software - Infrastructure",
    sector: "Technology",
    description:
      "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.",
    country: "United States of America",
    region: "United States and Canada",
    employees: "228,000",
    activelyTraded: "Yes",
  },
  {
    id: 4,
    name: "Amazon.com, Inc.",
    ticker: "AMZN",
    exchange: "NASDAQ",
    industry: "Specialty Retail",
    sector: "Consumer Cyclical",
    description:
      "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores.",
    country: "United States of America",
    region: "United States and Canada",
    employees: "2M",
    activelyTraded: "Yes",
  },
  {
    id: 5,
    name: "Alphabet Inc.",
    ticker: "GOOGL",
    exchange: "NASDAQ",
    industry: "Internet Content & Information",
    sector: "Communication Services",
    description:
      "Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.",
    country: "United States of America",
    region: "United States and Canada",
    employees: "183,323",
    activelyTraded: "Yes",
  },
];

// Filter badges
const filterBadges = [
  { id: 1, label: "Actively Traded", condition: "Equal to", value: "Yes" },
  { id: 2, label: "Sector", condition: "Equal to", value: "Utilities" },
  { id: 3, label: "ROE LTM", condition: "Greater than", value: "10%" },
  {
    id: 4,
    label: "Number of Analysts' estimates",
    condition: "Greater than",
    value: "2",
  },
];

export const CompanyScreener = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [activeView, setActiveView] = useState("classic");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [aiSuggestions, setAiSuggestions] = useState([
    "Find tech companies with P/E < 20",
    "Companies with high dividend yield",
    "US energy companies with low debt",
  ]);
  const [queryHistory, setQueryHistory] = useState([]);

  // Sorting logic
  const sortedData = useMemo(() => {
    let sortableData =
      activeTab === "profile" ? [...companyData2] : [...companyData1];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [sortConfig, activeTab]);

  // Pagination logic
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  // Handle sorting
  const requestSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  // Handle company selection
  const toggleCompanySelection = (id) => {
    setSelectedCompanies((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers =
      activeTab === "profile"
        ? Object.keys(companyData2[0])
        : Object.keys(companyData1[0]);
    const csvContent = [
      headers.join(","),
      ...sortedData.map((row) =>
        headers.map((header) => `"${row[header]}"`).join(",")
      ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${activeTab}_data.csv`;
    link.click();
  };

  // Handle AI Query Submission
  const handleAiQuery = () => {
    if (searchQuery.trim()) {
      setQueryHistory((prev) => [searchQuery, ...prev.slice(0, 4)]);
      // Simulate AI filtering (replace with real logic if needed)
      console.log("AI Query:", searchQuery);
      setSearchQuery("");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-valueEq-teal">
            Company Screener
          </h2>
          <div className="flex gap-2">
            <Button
              variant={activeView === "classic" ? "default" : "outline"}
              size="sm"
              className={
                activeView === "classic" ? "bg-valueEq-blue text-white" : ""
              }
              onClick={() => setActiveView("classic")}
            >
              Classic Filters
            </Button>
            <Button
              variant={activeView === "ai" ? "default" : "outline"}
              size="sm"
              className={
                activeView === "ai" ? "bg-valueEq-blue text-white" : ""
              }
              onClick={() => setActiveView("ai")}
            >
              <SparkleIcon className="w-4 h-4 mr-1" />
              AI Screener
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" onClick={exportToCSV}>
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>Export table data as CSV</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {activeView === "classic" && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {filterBadges.map((badge) => (
              <Badge
                key={badge.id}
                variant="outline"
                className="px-3 py-1 bg-blue-50"
              >
                <span className="font-medium">{badge.label}</span>:{" "}
                {badge.condition} {badge.value}
                <button className="ml-2 text-red-500 hover:text-red-700">
                  ×
                </button>
              </Badge>
            ))}
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-7 bg-transparent border-b">
                  {[
                    "summary",
                    "profile",
                    "financials",
                    "valuation",
                    "growth",
                    "risk",
                    "efficiency",
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="summary" className="p-4">
                  <Table
                    data={paginatedData}
                    columns={Object.keys(companyData1[0])}
                    sortConfig={sortConfig}
                    requestSort={requestSort}
                    toggleCompanySelection={toggleCompanySelection}
                    selectedCompanies={selectedCompanies}
                  />
                  <Pagination
                    totalItems={sortedData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </TabsContent>

                <TabsContent value="profile" className="p-4">
                  <Table
                    data={paginatedData}
                    columns={Object.keys(companyData2[0])}
                    sortConfig={sortConfig}
                    requestSort={requestSort}
                    toggleCompanySelection={toggleCompanySelection}
                    selectedCompanies={selectedCompanies}
                  />
                  <Pagination
                    totalItems={sortedData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </TabsContent>

                {[
                  "financials",
                  "valuation",
                  "growth",
                  "risk",
                  "efficiency",
                ].map((tab) => (
                  <TabsContent
                    key={tab}
                    value={tab}
                    className="p-4 text-center"
                  >
                    {selectedCompanies.length > 0 ? (
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Selected Companies for{" "}
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </h3>
                        <ul className="list-disc list-inside">
                          {selectedCompanies.map((id) => {
                            const company = sortedData.find((c) => c.id === id);
                            return <li key={id}>{company?.name || id}</li>;
                          })}
                        </ul>
                      </div>
                    ) : (
                      <div className="py-8">
                        <Search className="w-12 h-12 mx-auto text-gray-400" />
                        <h3 className="text-xl font-medium mt-4">
                          Select companies to analyze
                        </h3>
                        <p className="text-gray-500">
                          Use checkboxes to view detailed {tab} metrics.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}

      {activeView === "ai" && (
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="relative">
                <textarea
                  className="w-full h-32 p-4 border rounded-md focus:ring-2 focus:ring-valueEq-teal"
                  placeholder="Type your query (e.g., 'Find companies with ROE > 10% in Utilities, USA')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAiQuery()}
                />
                <Button
                  className="absolute bottom-4 right-4 bg-valueEq-teal hover:bg-valueEq-teal/90"
                  onClick={handleAiQuery}
                >
                  <SparkleIcon className="w-4 h-4 mr-1" />
                  Run AI Search
                </Button>
              </div>
              <div className="mt-2 text-sm text-amber-600 flex items-center">
                <Lightbulb className="w-4 h-4 mr-1" />
                Our AI understands all languages!
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium">Suggestions:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {aiSuggestions.map((suggestion, idx) => (
                    <Badge
                      key={idx}
                      className="cursor-pointer hover:bg-gray-200"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>
              {queryHistory.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Recent Queries:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {queryHistory.map((query, idx) => (
                      <Badge
                        key={idx}
                        className="cursor-pointer hover:bg-gray-200"
                        onClick={() => setSearchQuery(query)}
                      >
                        {query}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-7 bg-transparent border-b">
                  {[
                    "summary",
                    "profile",
                    "financials",
                    "valuation",
                    "growth",
                    "risk",
                    "efficiency",
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="data-[state=active]:border-b-2 data-[state=active]:border-valueEq-teal"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="summary" className="p-4">
                  {queryHistory.length > 0 ? (
                    <>
                      <Table
                        data={paginatedData}
                        columns={Object.keys(companyData1[0])}
                        sortConfig={sortConfig}
                        requestSort={requestSort}
                        toggleCompanySelection={toggleCompanySelection}
                        selectedCompanies={selectedCompanies}
                      />
                      <Pagination
                        totalItems={sortedData.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                      />
                    </>
                  ) : (
                    <div className="py-8 text-center">
                      <SparkleIcon className="w-12 h-12 mx-auto text-valueEq-teal" />
                      <h3 className="text-xl font-medium mt-4">
                        Run an AI query to see results
                      </h3>
                      <p className="text-gray-500">
                        Type a query above to find matching companies.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="profile" className="p-4">
                  <Table
                    data={paginatedData}
                    columns={Object.keys(companyData2[0])}
                    sortConfig={sortConfig}
                    requestSort={requestSort}
                    toggleCompanySelection={toggleCompanySelection}
                    selectedCompanies={selectedCompanies}
                  />
                  <Pagination
                    totalItems={sortedData.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </TabsContent>

                {[
                  "financials",
                  "valuation",
                  "growth",
                  "risk",
                  "efficiency",
                ].map((tab) => (
                  <TabsContent
                    key={tab}
                    value={tab}
                    className="p-4 text-center"
                  >
                    {selectedCompanies.length > 0 ? (
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Selected Companies for{" "}
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </h3>
                        <ul className="list-disc list-inside">
                          {selectedCompanies.map((id) => {
                            const company = sortedData.find((c) => c.id === id);
                            return <li key={id}>{company?.name || id}</li>;
                          })}
                        </ul>
                      </div>
                    ) : (
                      <div className="py-8">
                        <Search className="w-12 h-12 mx-auto text-gray-400" />
                        <h3 className="text-xl font-medium mt-4">
                          Run an AI query first
                        </h3>
                        <p className="text-gray-500">
                          Select companies to view detailed {tab} info.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

// Reusable Table Component
const Table = ({
  data,
  columns,
  sortConfig,
  requestSort,
  toggleCompanySelection,
  selectedCompanies,
}) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-3 text-left w-10">
            <Checkbox
              checked={
                selectedCompanies.length === data.length && data.length > 0
              }
              onCheckedChange={() =>
                data.forEach((item) =>
                  selectedCompanies.includes(item.id)
                    ? null
                    : toggleCompanySelection(item.id)
                )
              }
            />
          </th>
          {columns.map((col) => (
            <th
              key={col}
              className="p-3 text-left font-medium cursor-pointer hover:bg-gray-100"
              onClick={() => requestSort(col)}
            >
              {col.replace(/([A-Z])/g, " $1").trim()}
              {sortConfig.key === col &&
                (sortConfig.direction === "asc" ? " ↑" : " ↓")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50 border-b">
            <td className="p-3">
              <Checkbox
                checked={selectedCompanies.includes(row.id)}
                onCheckedChange={() => toggleCompanySelection(row.id)}
              />
            </td>
            {columns.map((col) => (
              <td key={col} className="p-3">
                {col === "name" ? (
                  <div>
                    <div className="font-medium">{row[col]}</div>
                    <div className="text-xs text-gray-500">{row.ticker}</div>
                  </div>
                ) : (
                  row[col]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Pagination Component
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-gray-500">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
        results
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
