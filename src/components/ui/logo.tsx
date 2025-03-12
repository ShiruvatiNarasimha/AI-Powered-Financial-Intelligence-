
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "sidebar";
  withText?: boolean;
}

export function Logo({
  className,
  size = "medium",
  variant = "default",
  withText = true,
}: LogoProps) {
  const sizeClasses = {
    small: "h-6",
    medium: "h-8",
    large: "h-10",
  };

  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center gap-2 font-display transition-opacity hover:opacity-90", 
        className
      )}
    >
      <div className={cn("text-valueEq-teal", sizeClasses[size])}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(sizeClasses[size])}
        >
          <path d="M12 22l-3-3H7a5 5 0 0 1 0-10h10a5 5 0 0 1 0 10h-2l-3 3z" />
          <path d="M7 17h10V5L7 7v10z" />
          <path d="M12 13V7" />
          <path d="M9 10l6 6" />
          <path d="M9 16l6-6" />
        </svg>
      </div>
      {withText && (
        <span className={cn(
          "font-bold tracking-tight",
          variant === "default" ? "text-foreground" : "text-white",
          size === "small" ? "text-lg" : "text-xl"
        )}>
          ValueEq
        </span>
      )}
    </Link>
  );
}
