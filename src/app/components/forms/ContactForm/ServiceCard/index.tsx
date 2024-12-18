import React from "react";
import { cn } from "@/app/lib/utils";
import { ServiceType } from "../../types";

type ServiceCardProps = ServiceType & {
  isSelected?: boolean;
  onClick?: () => void;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  subtitle,
  title,
  isSelected,
  onClick,
}) => {
  return (
    <article
      onClick={onClick}
      className={cn(
        // Base styles
        "flex w-full cursor-pointer flex-col items-center justify-center",
        "rounded-lg border-2 p-6",
        "transition-all duration-200 ease-in-out",
        // Hover and selected states
        "hover:border-gray-200 hover:bg-gray-50",
        isSelected ? "border-red-primary bg-red-50" : "border-transparent",
      )}
    >
      {/* Icon container */}
      <div
        className={cn(
          "h-[50px] w-[50px]",
          "transform transition-transform duration-200",
          "group-hover:scale-110",
        )}
      >
        {image}
      </div>
      {/* Text content */}
      <div className="mt-4 text-center">
        <h3
          className={cn(
            "font-title font-semibold",
            "mb-1 text-lg",
            isSelected ? "text-red-primary" : "text-gray-800",
          )}
        >
          {title}
        </h3>
        <span className="text-sm text-gray-600">{subtitle}</span>
      </div>
    </article>
  );
};
