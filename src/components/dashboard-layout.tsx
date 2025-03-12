import React, { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import {
  Bell,
  Search,
  User,
  Shield,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  BookOpen,
  MessageSquare,
  LifeBuoy,
  SparkleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New feature available",
      description: "AI Prediction is now available for all premium users",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Report generated",
      description: "Your quarterly financial report is ready to view",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Price alert",
      description: "AAPL has increased by 5% today",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      title: "System update",
      description: "ValueEq platform will be updated tonight at 2 AM EST",
      time: "2 days ago",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div className="pl-64 w-full transition-all duration-300">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-1 items-center gap-4">
            <form className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search companies, reports, or analysis..."
                  className="pl-8 bg-background/95 focus-visible:ring-valueEq-teal"
                />
              </div>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <Popover
              open={showNotifications}
              onOpenChange={setShowNotifications}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground relative"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-valueEq-teal text-white text-xs">
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-80 p-0">
                <Card className="border-0">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base">Notifications</CardTitle>
                      {unreadCount > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-xs text-blue-600 hover:text-blue-700"
                          onClick={markAllAsRead}
                        >
                          Mark all as read
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="max-h-[350px] overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="py-8 text-center">
                          <Bell className="mx-auto h-8 w-8 text-muted-foreground/50 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            No notifications
                          </p>
                        </div>
                      ) : (
                        <div className="grid gap-1">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={cn(
                                "px-4 py-3 hover:bg-muted/50 cursor-pointer transition-colors",
                                !notification.read && "bg-blue-50"
                              )}
                            >
                              <div className="flex justify-between">
                                <h4
                                  className={cn(
                                    "text-sm font-medium",
                                    !notification.read && "text-blue-700"
                                  )}
                                >
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <span className="h-2 w-2 rounded-full bg-valueEq-teal" />
                                )}
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                                {notification.description}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground/60">
                                {notification.time}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-center border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs"
                    >
                      View all notifications
                    </Button>
                  </CardFooter>
                </Card>
              </PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                >
                  <HelpCircle className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Help Center</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Documentation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Live Chat Support
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    Contact Support
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SparkleIcon className="mr-2 h-4 w-4" />
                  Getting Started Tutorial
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 flex items-center gap-2 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/assets/avatars/01.png" alt="User" />
                    <AvatarFallback className="bg-valueEq-teal text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium">Shiruvati</span>
                    <span className="text-xs text-muted-foreground">
                      Premium
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Shiruvati</p>
                    <p className="text-xs text-muted-foreground">
                      shiruvati@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Display</DropdownMenuItem>
                        <DropdownMenuItem>Notifications</DropdownMenuItem>
                        <DropdownMenuItem>Integrations</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className={cn("p-6", className)}>{children}</main>
      </div>
    </div>
  );
}
