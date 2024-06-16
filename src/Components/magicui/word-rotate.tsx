"use client";

import cn from "classnames";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface WordRotateProps {
  words?: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

export default function WordRotate({
  words = ["A Front-End Developer", "A UI/UX Designer", "A Problem Solver"],
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const startInterval = () => {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, duration);
    };

    const stopInterval = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIndex(0); // Reset index when user returns to the tab
        startInterval();
      } else {
        stopInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start interval initially
    startInterval();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopInterval();
    };
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
