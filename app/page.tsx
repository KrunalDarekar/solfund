"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Shield, Star, BookOpenCheck, Users } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-20 items-center justify-between">
              <motion.div 
                className="space-y-4 w-full lg:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1 
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Empower Your Dreams with Web3 Fundraising
                </motion.h1>
                <motion.p 
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Join a revolutionary platform that enables you to start & support campaigns using the power of Solana's Web3
                  payments. Experience fast, secure, and transparent fundraising like never before.
                </motion.p>
                <motion.div 
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button className="bg-[#9549fc] text-white hover:bg-[#9549fc]/90">Start Campaign</Button>
                  <Button variant="outline">Support a Cause</Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-end w-fit"
              >
                <Image
                  alt="Hero"
                  className="mx-auto overflow-hidden rounded-xl object-cover self-end"
                  src="/hero.svg"
                  height="500"
                  width="500"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-8 grid lg:grid-cols-3 gap-8 md:gap-16 lg:gap-30 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden w-full h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Shield className="h-12 w-12 mb-4 text-[#9549fc]" />
                  <h3 className="text-xl font-bold mb-2">Secure Payments for Peace of Mind</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our platform utilizes blockchain technology to guarantee secure transactions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden w-full h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <BookOpenCheck className="h-12 w-12 mb-4 text-[#2fd5be]" />
                  <h3 className="text-xl font-bold mb-2">Unmatched Transparency in Every Transaction</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    View real-time updates and transaction histories effortlessly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden w-full h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Users className="h-12 w-12 mb-4 text-[#9549fc]" />
                  <h3 className="text-xl font-bold mb-2">User-Friendly Interface for Everyone</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our intuitive design makes fundraising accessible to all.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-8">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
              Easily launch your campaign and accept contributions using Solana in minutes.
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-4">
                <Image
                  alt="Create Campaign"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-xl font-bold">Empower your fundraising efforts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Start by creating a campaign, set your funding goal, and share it.
                </p>
                <Button variant="link" className="text-[#9549fc] p-0">
                  Get Started →
                </Button>
              </div>
              <div className="space-y-4">
                <Image
                  alt="Contribute"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-xl font-bold">Contribute effortlessly</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Select a campaign, choose your contribution amount, and complete your payment.
                </p>
                <Button variant="link" className="text-[#9549fc] p-0">
                  Donate →
                </Button>
              </div>
              <div className="space-y-4">
                <Image
                  alt="Track Progress"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <h3 className="text-xl font-bold">Track your campaign's progress</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Monitor contributions, share updates, and thank your contributors directly.
                </p>
                <Button variant="link" className="text-[#9549fc] p-0">
                  Follow →
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#9549fc] text-[#9549fc]" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                  "Using this platform transformed my fundraising experience. The seamless web3 payments made it easier than
                  ever to support my cause!"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    alt="Testimonial"
                    className="rounded-full"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="text-sm">
                    <div className="font-medium">John Doe</div>
                    <div className="text-gray-500 dark:text-gray-400">Founder, Charity XYZ</div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button size="icon" variant="outline">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 SolFund. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
