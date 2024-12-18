import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

export const CompanyValuesSkeleton = () => {
  return (
    <section className="bg-surface-beige text-center">
      <Container>
        <VSpace empresaPage>
          {/* Title Skeleton */}
          <div className="mx-auto h-8 w-1/3 animate-pulse rounded-md bg-gray-200" />

          {/* Cards Grid Skeleton */}
          <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-6 py-6 md:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="our-values-card-padding flex h-full flex-col items-center justify-start gap-y-3 rounded-lg bg-white shadow-lg"
              >
                {/* Icon Skeleton */}
                <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
                {/* Title Skeleton */}
                <div className="h-6 w-24 animate-pulse rounded-md bg-gray-200" />
                {/* Description Skeleton */}
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
