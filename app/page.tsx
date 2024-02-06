import MainCarousel from "@/components/MainCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar notSelf='products' />
      <main>
        <MainCarousel />
      </main>
    </div>
  );
}
