"use client";
import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedAnimation = ({
  strings,
  typeSpeed,
  backSpeed,
  loop,
  className,
}: {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop?: boolean;
  className?: string;
}) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    // const options = {
    //   strings: ["Premier texte", "Deuxième texte", "Troisième texte"],
    //   typeSpeed: 50,
    //   backSpeed: 30,
    //   loop: true,
    // };
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return (
    <>
      <span ref={el} className={clsx(className)}></span>
    </>
  );
};

export default TypedAnimation;
