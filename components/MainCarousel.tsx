'use client';

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useRef } from "react";
import Image from "next/image";

export default function MainCarousel(){

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true})
  )

  const slides = [
    {
      url: "styleBg",
      firstWord: "Elevate",
      secondWord: "your",
      thirdWord: "style",
    },
    {
      url: "fashionBg",
      firstWord: "Quality",
      secondWord: "meets",
      thirdWord: "fashion",
    },
    {
      url: "exclusiveBg",
      firstWord: "Exclusive",
      secondWord: "launch",
      thirdWord: "offers",
    },
    {
      url: "shippingBg",
      firstWord: "Free",
      secondWord: "shipping",
      thirdWord: "forever",
    },
  ]


  return (
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-sm">
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} >
                <div className={`p-1 flex items-center justify-center w-80 h-80 bg-shippingBg  bg-cover`}>
                  <div className="self-start"><h2>{slides[index].firstWord}</h2></div>
                  <div className="self-center"><h2>{slides[index].secondWord}</h2></div>
                  <div className="self-end"><h2>{slides[index].thirdWord}</h2></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
  );
}
