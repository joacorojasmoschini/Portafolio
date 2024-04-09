"use client";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiEnvelopeOpen,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navData = [
    {
      name: "Home",
      path: "/",
      icon: <HiHome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <HiUser />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <HiRectangleGroup />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <HiEnvelopeOpen />,
    },
  ];
  return (
    <nav className="flex justify-center items-center fixed bottom-0 w-full z-20 sm:mb-2">
      <div className="max-w-screen-sm flex items-center justify-between lg:justify-center py-2 px-10 gap-x-10 sm:rounded-full bg-light-blue/20 w-full lg:w-auto">
        {navData.map((data, index) => {
          return (
            <Link
              key={index}
              href={data.path}
              className={`flex flex-col justify-center items-center ${
                data.path === pathname ? "text-light-red" : "text-white"
              }`}
            >
              <div className="text-3xl md:text-xl">{data.icon} </div>
              <div className="hidden md:block text-xs">{data.name}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
