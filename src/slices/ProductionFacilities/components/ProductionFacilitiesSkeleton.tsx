import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

export const ProductionFacilitiesSkeleton = () => {
  return (
    <section>
      <Container>
        <VSpace empresaPage>
          {/* Title Skeleton */}
          <div className="mx-auto mb-10 h-8 w-2/3 animate-pulse rounded-md bg-gray-200" />

          {/* Facilities Articles */}
          {[1, 2].map((index) => (
            <article
              key={index}
              className="mb-10 grid grid-cols-1 items-start gap-4 last:mb-0 md:grid-cols-2 lg:gap-16"
            >
              {/* Text Content */}
              <div className="space-y-4">
                <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
              {/* Image Skeleton */}
              <div className="aspect-video w-full animate-pulse rounded-lg bg-gray-200" />
            </article>
          ))}
        </VSpace>
      </Container>
    </section>
  );
};
