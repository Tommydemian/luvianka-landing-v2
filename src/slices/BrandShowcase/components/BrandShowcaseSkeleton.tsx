import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";
export const BrandShowcaseSkeleton = () => {
  return (
    <section>
      <Container>
        <VSpace lg>
          <article className="py-16 md:py-24">
            {/* Title & Description Skeleton */}
            <div className="mb-12 space-y-4 md:mb-16">
              <div className="mx-auto h-8 w-1/3 animate-pulse rounded-md bg-gray-200" />
              <div className="mx-auto h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Logos Grid Skeleton */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="h-[60px] w-[120px] animate-pulse rounded bg-gray-200 md:w-[150px]"
                />
              ))}
            </div>
          </article>
        </VSpace>
      </Container>
    </section>
  );
};
