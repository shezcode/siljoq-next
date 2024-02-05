import { Search } from "lucide-react";
import Logo from "./../public/assets/logo2.png";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-around p-4 gap-4 w-full bg-gradientBg bg-cover font-body">
      <a href="/">
        <Image src={Logo} alt="Brand Logo" width={80} height={80} />
      </a>
      <div className="relative shadow-lg">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="p-4 rounded-lg h-[40px] text-dark focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Submit-search"
          className="flex items-center absolute h-[40px] p-4 rounded-lg top-0 right-0 z-10 bg-sec-yellow"
        >
          <Search className="text-dark" />
        </button>
      </div>
      <ul className="flex flex-row gap-2 text-display font-bold">
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
        <li>
          <a href="/FAQ">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
