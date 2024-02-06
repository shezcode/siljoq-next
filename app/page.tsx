import Navbar from "@/components/Navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar notSelf='products' />
      <main>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
            
            </CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselContent>
        </Carousel>

      </main>
    </div>
  );
}
