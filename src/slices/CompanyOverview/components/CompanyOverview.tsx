import { Container } from "@/app/components/ui/Container";
import { VSpace } from "@/app/components/ui/VSpace";

export const CompanyOverviewSkeleton = () => {
  return (
    <section>
      <Container>
        <VSpace empresaPage>
          <div className="flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-10">
            {/* Logos Container */}
            <div className="flex flex-wrap items-baseline justify-between md:justify-start md:gap-x-8">
              {/* Luvianka Logo Skeleton */}
              <div className="h-[3.75rem] w-[7.188rem] animate-pulse rounded bg-gray-200" />
              {/* Red Deer Logo Skeleton */}
              <div className="h-[3.75rem] w-[7.188rem] animate-pulse rounded bg-gray-200" />
            </div>

            {/* Content Container */}
            <div className="space-y-4">
              {/* Title Skeleton */}
              <div className="space-y-2">
                <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
              </div>
              {/* Description Skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full max-w-[58ch] animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-5/6 max-w-[58ch] animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-4/5 max-w-[58ch] animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </VSpace>
      </Container>
    </section>
  );
};
