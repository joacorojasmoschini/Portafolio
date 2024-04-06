import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto my-4">
      <div className="w-full flex justify-between text-xl">
        <div>
          <Link href="/">
            LOGO
          </Link>
          </div>
        <div className="flex gap-x-2">
          <FaLinkedin className="hover:text-red cursor-pointer duration-300"/>
          <FaGithub className="hover:text-red cursor-pointer duration-300"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
