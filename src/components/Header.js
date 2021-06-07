import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    //   top nav
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* LOGO */}
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* SEARCH */}
        <div className="hidden sm:flex bg-yellow-400 flex hover:bg-yellow-500">
          <input type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>
      </div>
      {/* bottom nav  */}
      <div></div>
    </header>
  );
}

export default Header;
// assasas

// kjhjkkh// kjhjkkh// assasas

// kjhjkkh// kjhjkkh