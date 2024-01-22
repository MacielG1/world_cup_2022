"use client";
import AllCountries from "@/components/AllCountries";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Header() {
  let [showAllCountries, setShowAllCountries] = useState(true);

  function handleShowAllCountries() {
    setShowAllCountries((prev) => !prev);
  }

  return (
    <header>
      <Navbar handleShowAllCountries={handleShowAllCountries} showAllCountries={showAllCountries} />
      <AllCountries showAllCountries={showAllCountries} />
    </header>
  );
}
