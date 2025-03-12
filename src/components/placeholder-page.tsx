
import React from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";

interface PlaceholderPageProps {
  title?: string;
  description?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title = "Page Under Construction", 
  description = "This feature is coming soon. Our team is working hard to build this functionality." 
}) => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  const formattedTitle = title === "Page Under Construction" ? 
    `${path?.charAt(0).toUpperCase()}${path?.slice(1)} - ${title}` : 
    title;

  return (
    <DashboardLayout>
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold">{formattedTitle}</h1>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">{formattedTitle}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-valueEq-teal to-valueEq-blue flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                <path d="M15 9l-6 6" />
                <path d="M9 9l6 6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              This section is currently under development. Check back soon for updates
              or subscribe to our newsletter to be notified when it's ready.
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="outline">Back to Dashboard</Button>
              <Button className="bg-valueEq-teal hover:bg-valueEq-teal/90">Contact Support</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};
