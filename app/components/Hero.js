"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <span className="text-xl font-bold">Hey, I&apos;m Pratham</span>
        <button
          onClick={() => setDark(!dark)}
          className="hover:bg-gray-200 dark:hover:bg-zinc-800 p-2 rounded-md transition-colors"
        >
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
      <div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Aspiring MERN Stack Developer seeking a challenging software
          development role where I can contribute to scalable web applications
          and continue learning modern tech stacks.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <a href="https://github.com/Pratham-008" target="_blank">
          <i
            className="fa fa-github fa-lg text-zinc-400 hover:text-black cursor-pointer dark:hover:text-white"
            aria-hidden="true"
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/patel-pratham-kanubhai-775424317/"
          target="_blank"
        >
          <i
            className="fa fa-linkedin-square fa-lg  text-zinc-400 hover:text-black cursor-pointer dark:hover:text-white"
            aria-hidden="true"
          ></i>
        </a>
        <a href="mailto:patelprathamkanubhai@gmail.com" target="_blank">
          <i
            className="fa fa-envelope fa-lg text-zinc-400 hover:text-black cursor-pointer dark:hover:text-white"
            aria-hidden="true"
          ></i>
        </a>
      </div>
      <div className="flex gap-1 items-center">
        <span>Resume</span>
        <a href="/Resume.pdf" target="_blank">
          <i
            className="fa fa-file-text fa-md text-zinc-400 hover:text-black cursor-pointer dark:hover:text-white"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
}
