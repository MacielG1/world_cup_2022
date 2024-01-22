"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import arrowDown from "../public/icons/arrowDown.svg";
import Link from "next/link";
import Image from "next/image";
import WorldCupLogo from "../public/icons/WorldCupLogo.svg";
import ball from "../public/icons/ball.svg";

import { navigation } from "@/data/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

// function that combines classes without needing template literals
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ handleShowAllCountries, showAllCountries }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let pathname = usePathname();

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <nav className="sticky w-full top-0 z-40 bg-rose-900">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
        {/* Mobile Toggle */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <div
            onClick={toggleMenu}
            className="mx-1 inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800"
          >
            <span className="sr-only">isOpen main menu</span>
            {isOpen ? <IoCloseOutline className="block h-6 w-6 " aria-hidden="true" /> : <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />}
          </div>
        </div>
        <div className="flex w-[90vw] items-center justify-center min-[350px]:justify-between sm:items-stretch">
          {/* Logo */}
          <Link className="flex flex-shrink-0 items-center sm:mr-[10rem]" href="/">
            <Image src={WorldCupLogo} alt="World Cup Logo" unoptimized width={50} height={50} className="block h-8 w-auto" />
            <span className="mx-3 hidden cursor-pointer text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 hover:text-white min-[400px]:block  ">World Cup 2022</span>
          </Link>

          <div className="flex justify-center items-center gap-1">
            <Image
              src={ball}
              alt="ball"
              aria-label="Show All Countries Menu"
              unoptimized
              width={50}
              height={50}
              className="block h-8 w-auto cursor-pointer min-w-[30px] animate-spinSlow "
              onClick={handleShowAllCountries}
            />
            <div className={`cursor-pointer transition-transform duration-300 transform ${showAllCountries ? "" : "rotate-90"}`} onClick={handleShowAllCountries}>
              <Image
                src={arrowDown}
                alt="arrowDown"
                unoptimized
                width={50}
                height={50}
                className="block h-8 w-auto cursor-pointer min-w-[30px] pt-2   "
                style={showAllCountries ? { filter: "saturate(40%)" } : { filter: "saturate(200%)" }}
              />
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-1 md:gap-3">
              {navigation.map((item) => {
                let isActive = item.href === pathname;

                return (
                  <div
                    key={item.name}
                    className={classNames(
                      `${item.subMenu ? "group relative hover:rounded-b-none" : ""} 
                        ${isActive ? "" : "hover:bg-rose-700"}
                        flex justify-center rounded-lg text-sm font-medium tracking-wide text-zinc-200  hover:text-white focus:outline-none`
                    )}
                  >
                    <Link
                      href={item.href}
                      className={`flex w-[5.5rem] items-center justify-center rounded-lg px-2 py-2 bg-rose-700 transition duration-200 
                      ${item.subMenu ? "hover:rounded-b-none" : ""}
                      ${isActive ? "bg-rose-950/40 text-gray-200 cursor-default" : ""}

                      `}
                      // style={isActive ? { backgroundColor: "  rgb(159 18 57) border" } : {}}
                      target={item.href.startsWith("http") ? "_blank" : ""}
                    >
                      <span>{item.name}</span>
                      {item.subMenu && <AiFillCaretDown className="pl-1 text-sm text-white transition duration-200 group-hover:text-rose-800" />}
                    </Link>
                    {item.subMenu && (
                      <div className="absolute left-0 top-full z-10 hidden rounded-b-lg w-32 transform whitespace-nowrap  bg-rose-700 shadow-lg group-hover:block  ">
                        {item.subMenu.map((subItem) => (
                          <div className="group/sec relative" key={subItem.name}>
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.href.startsWith("http") ? "_blank" : ""}
                              className={`block w-full px-4 py-2 text-sm text-white hover:bg-rose-900 
                              ${subItem === item.subMenu[item.subMenu.length - 1] && "rounded-bl-md"}
                              `}
                            >
                              {subItem.name}
                            </Link>
                            {subItem.subMenu && (
                              <div className="absolute top-0 left-full z-10 hidden w-32 transform -translate-x-1 whitespace-nowrap rounded-lg rounded-tl-none hover:rounded-tl-none bg-rose-900  shadow-lg group-hover/sec:block group-hover/sec:translate-x-0">
                                {subItem.subMenu.map((nestedSubItem) => (
                                  <Link
                                    key={nestedSubItem.name}
                                    href={nestedSubItem.href}
                                    target={nestedSubItem.href.startsWith("http") ? "_blank" : ""}
                                    className="block w-full rounded-none px-4 py-2 text-sm text-white first:rounded-tr-md hover:bg-rose-800 last:hover:rounded-b-md"
                                  >
                                    {nestedSubItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* <LanguageSwitcher size={16} /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items*/}
      {isOpen ? (
        <div className="mx-1 space-y-1 px-2 pb-2  pt-2 sm:hidden">
          {navigation.map((item) => {
            let isActive = item.href === pathname;

            return (
              <div
                key={item.name}
                className={classNames(
                  `${
                    item.subMenu ? "group relative  bg-rose-800" : ""
                  } "block text-md flex flex-col items-center rounded-md text-center font-medium tracking-wide   border-2 text-white  
               focus:outline-none  
                ${isActive ? "border-0 " : "border-rose-800 hover:border-rose-900"}
               `
                )}
              >
                <Link
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.subMenu) {
                      toggleDropdown();
                    } else {
                      toggleMenu();
                    }
                  }}
                  href={item.href}
                  className={`flex  w-full  items-center justify-center gap-1 rounded-md bg-rose-800 px-2  py-2 
                    ${isActive ? "bg-rose-950/40 text-gray-200 cursor-default border-0" : "hover:bg-rose-900"}
                    `}
                  aria-current={item.current ? "page" : undefined}
                >
                  <span>{item.name}</span>
                  {item.subMenu ? (
                    isDropdownOpen ? (
                      <AiFillCaretDown className=" pl-1 text-sm text-white transition duration-200 " />
                    ) : (
                      <AiFillCaretRight className=" pl-1 text-sm text-white transition duration-200 " />
                    )
                  ) : null}
                </Link>
                {item.subMenu && isDropdownOpen && (
                  <div className="relative left-0 top-full z-10 w-full transform whitespace-nowrap rounded-md bg-rose-800">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href="#"
                        className="block w-full rounded-md px-4 py-2  text-sm text-gray-300 hover:bg-rose-900 border-t border-rose-950/30 "
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu();
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* <div className="py-2 pl-5">
            <LanguageSwitcher size={23} />
          </div> */}
        </div>
      ) : null}
    </nav>
  );
}
