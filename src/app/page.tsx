"use client";
import { images } from "@/assets";
import Image from "next/image";
import { ArrowDownToLine, MoveDown } from "lucide-react";
import { motion } from "framer-motion";
import TypedAnimation from "@/components/TypedAnimation";
import AnimatedLink from "@/components/AnimatedLink";
import { links } from "@/data";
// import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <div className="fist-section h-screen overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-between items-end p-4 mb-10">
            <div className="space-x-1 relative">
              <Image
                src={images.avatar}
                alt="avatar"
                width={150}
                className=" inline-block absolute bottom-[-20]"
              />
              <Image
                src={images.arrow}
                alt="arrow"
                width={60}
                className=" inline-block absolute bottom-[-1] left-[6.5rem]"
              />
              <Image
                src={images.name}
                alt="arrow"
                width={60}
                className="pointer-events-none inline-block absolute bottom-[-8] left-[10.5rem]"
              />
              <div className="relative">
                <div className="text-2xl font-semibold absolute left-[65%] top-[4rem] z-10">
                  <TypedAnimation
                    strings={["Hi", "I'm a  frontend developer", ""]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop={true}
                    className=""
                  />
                </div>
                <Image
                  src={images.sky}
                  alt="sky"
                  width={400}
                  className="pointer-events-none inline-block left-28 relative"
                />
              </div>
            </div>
            <div>
              <motion.button
                className="bg-black flex justify-center items-center text-white px-4 py-2 rounded-lg mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Resume <ArrowDownToLine color="white" className="mx-2" />
              </motion.button>
            </div>
          </div>
          <div className="text-center">
            <h1 className="mt-10 mb-5">The art of creating to inspire.</h1>
            <p className=" max-w-3xl mx-auto">
              I&apos;m <span className=" font-bold">Marcos Yehouessi</span>, i
              create websites that don&apos;t just look good: they dance,
              vibrate and resonate with their users. Full Stack at heart, UX/UI
              ninja by passion, and bug buster by vocation.
            </p>
            <ul className="social-media text-white inline-flex space-x-8 my-7">
              {links.socialLink?.map((social, index) => {
                return (
                  <AnimatedLink
                    key={index}
                    href={social.link}
                    content={social.title}
                  />
                );
              })}
            </ul>
            <div className="flex justify-center text-white">
              <div className="bg-black rounded-full p-2 animate-bounce">
                <MoveDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Projects /> */}
    </div>
  );
}
