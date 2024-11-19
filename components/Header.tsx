"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'transparent',
          backgroundImage: 'radial-gradient(transparent 1px, white 1px)',
          backgroundSize: '4px 4px',
          backdropFilter: 'blur(5px)',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          opacity: 1
        }}
      />
      <motion.header 
        className="relative px-4 md:px-8 py-4 flex items-center justify-between z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
          <Link className="flex items-center justify-center" href="#">
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#9549fc] to-[#2fd5be]">
              SolFund
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Button className="bg-[#9549fc] text-white hover:bg-[#9549fc]/90">Get Started</Button>
          </nav>
      </motion.header>
    </div>
  )
}
