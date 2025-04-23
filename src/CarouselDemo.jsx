import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="relative w-full h-screen">
      {/* Carousel as the backdrop */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0 w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url()`,
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">
          Discover amazing content and explore the world with us.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}