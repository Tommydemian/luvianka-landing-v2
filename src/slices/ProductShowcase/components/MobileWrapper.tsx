"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "@/app/components/products/ProductCard";
import { MobileSkeleton, DesktopSkeleton } from "./skeletons";
import { cn } from "@/app/lib/utils";
import { useBreakpoint } from "@/app/lib/hooks/useBreakpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { ProductDocument } from "@/prismicio-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./custom-swiper-bullets.css";

type MobileWrapperProps = {
  products: ProductDocument[];
};

export const MobileWrapper: React.FC<MobileWrapperProps> = ({ products }) => {
  const isDesktop = useBreakpoint("(min-width: 768px)");
  const [matches, setMatches] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log(isMounted);
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return matches ? <DesktopSkeleton /> : <MobileSkeleton />;
  }

  if (isDesktop) {
    return (
      <>
        {products.map((product) => (
          <ProductCard
            key={product.data.product_title}
            product={product.data}
          />
        ))}
      </>
    );
  }

  //   return (
  //     <Swiper
  //       modules={[Pagination, A11y, Autoplay]}
  //       spaceBetween={16}
  //       slidesPerView={1.2}
  //       centeredSlides
  //       pagination={{
  //         clickable: true,
  //         dynamicBullets: true,
  //       }}
  //       autoplay={{
  //         delay: 1250,
  //         disableOnInteraction: true,
  //       }}
  //       className="h-96 w-full rounded-lg"
  //     >
  //       {products.map((product) => (
  //         <SwiperSlide key={product.data.product_title}>
  //           {({ isActive }) => (
  //             <div className="flex h-full w-full items-center justify-center">
  //               <ProductCard
  //                 product={product.data}
  //                 className={cn(
  //                   "ease-cube transition-all duration-300",
  //                   isActive ? "opacity-100" : "opacity-60",
  //                 )}
  //               />
  //             </div>
  //           )}
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   );
  // };
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={16}
      slidesPerView={1.2}
      centeredSlides
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 1250,
        disableOnInteraction: true,
      }}
      className="h-96 w-full rounded-lg"
    >
      {products.map((product) => (
        <SwiperSlide key={product.data.product_title}>
          {({ isActive, isPrev, isNext }) => (
            <div className="flex h-full w-full items-center justify-center">
              <ProductCard
                product={product.data}
                className={cn(
                  "ease-cube transform transition-all duration-300",
                  isActive
                    ? "scale-100 opacity-100 shadow-xl"
                    : "scale-90 opacity-60 brightness-90",
                  isPrev && "translate-x-4 -rotate-3",
                  isNext && "-translate-x-4 rotate-3",
                )}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
