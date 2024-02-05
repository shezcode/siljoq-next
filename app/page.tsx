import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar />
      <h1 className="font-display">Hello Siljoq</h1>
      <p className="font-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quae
        veritatis nihil! Molestiae perferendis non dolores, quasi accusantium
        saepe nostrum quo harum cumque. Suscipit minima placeat labore tempore
        ex ipsa.
      </p>
    </div>
  );
}
