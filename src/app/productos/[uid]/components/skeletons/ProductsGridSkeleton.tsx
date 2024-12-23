export const ProductsGridSkeleton = () => {
  return (
    <div className="space-y-4 md:space-y-8">
      {/* Category Title Skeleton */}
      <div className="max-mobile-base:h-8 mobile-base:h-10">
        <div className="h-full w-64 animate-pulse rounded-lg bg-gray-200" />
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="space-y-4 rounded-lg bg-white p-4">
            {/* Image Skeleton */}
            <div className="aspect-square animate-pulse rounded-lg bg-gray-200" />

            {/* Content Skeleton */}
            <div className="space-y-4">
              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

              {/* Details Grid */}
              <dl className="grid grid-cols-2 gap-2">
                <div>
                  <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                </div>
                <div>
                  <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="col-span-2">
                  <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
