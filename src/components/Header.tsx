import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto py-4">
      <div className="w-full flex justify-between text-xl">
        <div>
          <Link href="/">
            JOA<span className="text-light-red">DEV</span>
          </Link>
        </div>
        <div className="flex gap-x-2 text-3xl">
          <Link
            href="https://www.linkedin.com/in/joaqu%C3%ADn-rojas-moschini-47b42720b/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-light-red cursor-pointer duration-300" />
          </Link>
          <Link href="https://github.com/joacorojasmoschini" target="_blank">
            <FaGithub className="hover:text-light-red cursor-pointer duration-300" />
          </Link>
          <Link href="https://wa.me/542944124324" target="_blank">
            <FaWhatsapp className="hover:text-light-red cursor-pointer duration-300" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
