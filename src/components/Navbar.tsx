"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <HoveredLink href='/courses'> All Courses </HoveredLink>
              <HoveredLink href='/music-theory'> Basic Music Theory </HoveredLink>
              <HoveredLink href='/adv-composition'> Advanced Composition </HoveredLink>
              <HoveredLink href='/song-writing'> Song-writing </HoveredLink>
              <HoveredLink href='/music-production'> Music-Production </HoveredLink>
            </div>
          </MenuItem>
          <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
          </Link>
        </Menu>
      </div>
    );
}
