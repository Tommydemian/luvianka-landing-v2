export const HeroSkeleton = () => {
  return (
    <section className="relative">
      <div className="h-[75vh] w-full animate-pulse bg-gray-200/80">
        <div className="center-absolute absolute top-0 flex w-full flex-col items-center justify-center space-y-6 px-[1.75rem]">
          {/* Title skeleton */}
          <div className="h-8 w-3/4 rounded-md bg-gray-300/80 md:h-12 md:w-2/4" />

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-[30ch] rounded-md bg-gray-300/80 md:w-[55ch]" />
            <div className="h-4 w-[25ch] rounded-md bg-gray-300/80 md:w-[45ch]" />
          </div>

          {/* CTA skeleton */}
          <div className="h-[2.938rem] w-36 rounded-full bg-gray-300/80" />
        </div>
      </div>
    </section>
  );
};
