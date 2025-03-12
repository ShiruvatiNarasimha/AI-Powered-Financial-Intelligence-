import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import AIPrediction from "./pages/AIPrediction";
import { PlaceholderPage } from "./components/placeholder-page";
import HeroPage from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/ai-prediction" element={<AIPrediction />} />

          {/* Company Research Routes */}
          <Route
            path="/companies"
            element={
              <PlaceholderPage
                title="Companies Explorer"
                description="Research and analyze companies across multiple sectors and regions."
              />
            }
          />
          <Route
            path="/industries"
            element={
              <PlaceholderPage
                title="Industry Analysis"
                description="Explore trends and insights across different industries."
              />
            }
          />
          <Route
            path="/market"
            element={
              <PlaceholderPage
                title="Market Analysis"
                description="Access comprehensive market trends and data."
              />
            }
          />

          {/* Valuation Tools Routes */}
          <Route
            path="/valuation"
            element={
              <PlaceholderPage
                title="Valuation Models"
                description="Use advanced models to determine company valuations."
              />
            }
          />
          <Route
            path="/ratios"
            element={
              <PlaceholderPage
                title="Financial Ratios"
                description="Access key financial metrics and ratios for in-depth analysis."
              />
            }
          />
          <Route
            path="/scenarios"
            element={
              <PlaceholderPage
                title="Scenario Analysis"
                description="Model different business scenarios and their potential impacts."
              />
            }
          />

          {/* Reports Routes */}
          <Route
            path="/reports"
            element={
              <PlaceholderPage
                title="My Reports"
                description="Access and manage your saved financial reports."
              />
            }
          />
          <Route
            path="/alerts"
            element={
              <PlaceholderPage
                title="Alerts"
                description="Manage your custom alerts and notifications for market changes."
              />
            }
          />
          <Route
            path="/shared"
            element={
              <PlaceholderPage
                title="Shared Reports"
                description="View reports shared with you by colleagues and partners."
              />
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
