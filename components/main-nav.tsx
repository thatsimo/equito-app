"use client";

import Link from "next/link";

import { icons } from "./icons";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="https://www.equito.network"
        className="mr-6 flex items-center space-x-2"
      >
        <icons.logo />
      </Link>
    </div>
  );
}
