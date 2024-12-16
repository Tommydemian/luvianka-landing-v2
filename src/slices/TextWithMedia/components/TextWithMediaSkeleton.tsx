import { cn } from "@/app/lib/utils";

type TextWithMediaSkeletonProps = {
  isVariant?: boolean;
};

export const TextWithMediaSkeleton = ({
  isVariant,
}: TextWithMediaSkeletonProps) => {
  return (
    <section
      className={cn(isVariant ? "bg-surface-red" : "py-size-30 md:py-[7.5rem]")}
    >
      <div className={cn(!isVariant && "container")}>
        <div
          className={cn(
            "grid grid-cols-1 gap-x-10 gap-y-4",
            isVariant ? "md:grid-cols-2" : "lg:grid-cols-2",
          )}
        >
          {/* Image Skeleton */}
          <div
            className={cn(
              "md:order-0 order-1",
              isVariant
                ? "webkit-fill-available h-[20.875rem] md:h-[32.313rem]"
                : "h-[18.188rem] md:h-[23.75rem]",
              !isVariant && "justify-self-center",
              "animate-pulse bg-gray-200/80",
            )}
          />

          {/* Content Skeleton */}
          <div
            className={cn(
              !isVariant
                ? "order-0 md:order-1"
                : "mx-auto max-w-[37.5rem] py-size-30 md:ml-auto md:mr-0",
              "flex flex-col items-start justify-between gap-[0.75em]",
            )}
          >
            {/* Decorative Text */}
            <div className="h-6 w-24 animate-pulse rounded-md bg-gray-200/80" />

            {/* Title */}
            <div className="h-10 w-3/4 animate-pulse rounded-md bg-gray-200/80" />

            {/* Description - Multiple lines */}
            <div className="space-y-2 self-stretch">
              <div className="h-4 w-full animate-pulse rounded-md bg-gray-200/80" />
              <div className="h-4 w-5/6 animate-pulse rounded-md bg-gray-200/80" />
              <div className="h-4 w-4/6 animate-pulse rounded-md bg-gray-200/80" />
            </div>

            {/* CTA Button */}
            <div className="h-[2.938rem] w-36 animate-pulse rounded-full bg-gray-200/80" />
          </div>
        </div>
      </div>
    </section>
  );
};
