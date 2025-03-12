import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  LineChart,
  BrainCircuit,
  Building2,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  TrendingUp,
  PieChart,
  BadgeDollarSign,
  Layers,
  AlertCircle,
  Share2,
  HelpCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  description?: string;
  badge?: string;
  isNew?: boolean;
  isPro?: boolean;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: BarChart3,
        description: "Overview of your financial analysis",
      },
      {
        title: "Analysis",
        href: "/analysis",
        icon: LineChart,
        description: "Detailed financial analysis tools",
      },
      {
        title: "AI Prediction",
        href: "/ai-prediction",
        icon: BrainCircuit,
        description: "AI-powered financial forecasts",
        badge: "Pro",
        isPro: true,
      },
    ],
  },
  {
    title: "Research",
    items: [
      {
        title: "Companies",
        href: "/companies",
        icon: Building2,
        description: "Browse and analyze companies",
      },
      {
        title: "Industries",
        href: "/industries",
        icon: Briefcase,
        description: "Industry analysis and trends",
        isNew: true,
      },
      {
        title: "Market Analysis",
        href: "/market",
        icon: TrendingUp,
        description: "Market trends and insights",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Valuation Models",
        href: "/valuation",
        icon: PieChart,
        description: "Company valuation tools",
      },
      {
        title: "Financial Ratios",
        href: "/ratios",
        icon: BadgeDollarSign,
        description: "Key financial metrics",
      },
      {
        title: "Scenarios",
        href: "/scenarios",
        icon: Layers,
        description: "Scenario analysis",
        isNew: true,
      },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        title: "My Reports",
        href: "/reports",
        icon: FileText,
        description: "Generated financial reports",
      },
      {
        title: "Alerts",
        href: "/alerts",
        icon: AlertCircle,
        description: "Custom alerts and notifications",
      },
      {
        title: "Shared",
        href: "/shared",
        icon: Share2,
        description: "Shared with me",
      },
    ],
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar fixed left-0 top-0 z-30 border-r border-sidebar-border transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <Logo
          variant="sidebar"
          withText={!collapsed}
          size={collapsed ? "small" : "medium"}
        />
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="px-3 mt-4 flex-1 overflow-y-auto">
        <nav className="space-y-6">
          {navSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )
                    }
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
