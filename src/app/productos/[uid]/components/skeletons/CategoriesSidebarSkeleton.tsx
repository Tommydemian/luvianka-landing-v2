// components/CategoriesSidebarSkeleton.tsx
export const CategoriesSidebarSkeleton = () => {
  return (
    <aside className="w-full max-w-xs space-y-2">
      {/* Title Skeleton */}
      <div className="mb-6 h-8">
        <div className="h-full w-32 animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Categories List Skeleton */}
      <div className="space-y-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-full animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>
    </aside>
  );
};
