import { Search, ShoppingCart, User } from "lucide-react";
import Logo from "./../public/assets/logo2.png";
import Image from "next/image";

type Props = {
  notSelf: string;
};

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
          autoComplete="off"
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
      <ul className="flex flex-row gap-2 text-display font-bold w-[30%] h-auto justify-between items-center p-4">
        <li>
          <a href={props.notSelf} className="uppercase hover:text-sec-yellow">{props.notSelf == "/" ? "Home" : props.notSelf}</a>
        </li>
        <li>
          <a href="/about-us" className="uppercase hover:text-sec-yellow">About Us</a>
        </li>
        <li>
          <a href="/FAQ" className="uppercase hover:text-sec-yellow">FAQ</a>
        </li>
      </ul>
      <div className="p-4 bg-main-text flex flex-row gap-4 rounded-xl">
        <a href="/user">
          <User className="text-dark hover:cursor-pointer hover:text-siljoq-primary" />
        </a>
        <a href="/cart">
          <ShoppingCart className="text-dark hover:text-siljoq-primary hover:cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
