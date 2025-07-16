"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./Projects";
import Tools from "./Tools";
import AboutMe from "./AboutMe";

export default function Slider() {
  const [isactive, setisactive] = useState("projects");

  return (
    <div className="flex flex-col py-2 gap-3">
      <div className="flex gap-3 items-center">
        <div
          onClick={() => setisactive("projects")}
          className={
            isactive === "projects"
              ? "cursor-pointer font-bold "
              : "font-normal cursor-pointer"
          }
        >
          <span>Projects</span>
        </div>
        <div
          onClick={() => setisactive("tools")}
          className={
            isactive === "tools"
              ? "font-bold cursor-pointer"
              : "font-normal cursor-pointer"
          }
        >
          <span>Tools</span>
        </div>
        <div
          onClick={() => setisactive("About me")}
          className={
            isactive === "About me"
              ? "font-bold  cursor-pointer"
              : "font-normal cursor-pointer"
          }
        >
          <span>About me</span>
        </div>
      </div>
      <div className="min-h-[120px]">
        <AnimatePresence mode="wait">
          {isactive === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <Projects />
            </motion.div>
          )}
          {isactive === "tools" && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <Tools />
            </motion.div>
          )}
          {isactive === "About me" && (
            <motion.div
              key="aboutme"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <AboutMe />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
