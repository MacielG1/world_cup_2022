"use client";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      } fixed bottom-12 right-14 z-50 rounded-full bg-rose-900 p-2 text-white transition-opacity duration-300 ease-in-out focus:outline-none focus:ring focus:ring-rose-800  `}
      onClick={handleClick}
    >
      <AiOutlineArrowUp size={18} />
    </button>
  );
}

export default ScrollToTopButton;
