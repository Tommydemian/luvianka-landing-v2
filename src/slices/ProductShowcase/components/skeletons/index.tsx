export const DesktopSkeleton = () => (
  <>
    {Array.from({ length: 3 }).map((_, idx) => (
      <div
        key={idx}
        className="group relative mx-auto h-[25rem] w-[18rem] cursor-pointer overflow-hidden rounded-product-card"
      >
        <div className="h-full w-full animate-pulse bg-gray-200" />
        <div className="absolute bottom-8 left-1/2 w-3/4 -translate-x-1/2 space-y-2">
          <div className="h-6 rounded bg-gray-300" />
          <div className="h-4 w-3/4 rounded bg-gray-300" />
        </div>
      </div>
    ))}
  </>
);

export const MobileSkeleton = () => (
  <div className="h-[25rem] w-full">
    <div className="relative mx-auto h-full w-[18rem]">
      <div className="h-full w-full animate-pulse rounded-product-card bg-gray-200" />
      <div className="absolute bottom-8 left-1/2 w-3/4 -translate-x-1/2 space-y-2">
        <div className="h-6 rounded bg-gray-300" />
        <div className="h-4 w-3/4 rounded bg-gray-300" />
      </div>
    </div>
    <div className="mt-4 flex justify-center gap-2">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="h-2 w-2 rounded-full bg-gray-300" />
      ))}
    </div>
  </div>
);
