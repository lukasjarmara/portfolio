import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: object;
  className?: string;
}

export default function WordRotate({
  words,
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
    let interval;

    const startInterval = () => {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, duration);
    };

    // Start the interval when the component mounts
    startInterval();

    // Reset the interval when the tab is switched back
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        clearInterval(interval);
        startInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up interval and event listener on unmount
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
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
