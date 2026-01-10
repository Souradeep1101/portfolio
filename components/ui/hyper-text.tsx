"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

// Reverted to Uppercase for better aesthetics (Layout fix handles the width issues now)
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);
  
  // LOGIC: Track if animation has finished so we don't run it again
  const hasAnimated = useRef(false);

  const triggerAnimation = () => {
    // PREVENT RE-TRIGGER: If already animated, stop.
    if (hasAnimated.current) return;
    
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // On load check
      if (!animateOnLoad && isFirstRender.current) {
        clearInterval(interval);
        isFirstRender.current = false;
        return;
      }
      
      if (interations.current < text.length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= interations.current
              ? text[i]
              : alphabets[getRandomInt(26)]
          )
        );
        interations.current = interations.current + 0.1;
      } else {
        setTrigger(false);
        clearInterval(interval);
        hasAnimated.current = true; // Mark as done
      }
    }, duration / (text.length * 10));
    
    // Cleanup
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div
      className="relative overflow-hidden py-2 flex cursor-default"
      onMouseEnter={triggerAnimation}
    >
      {/* LAYER 1: INVISIBLE CLONE 
        This holds the correct width/height of the final text.
        It forces the parent container to stay stable.
      */}
      <div className="invisible flex">
        {text.split("").map((letter, i) => (
            <span key={i} className={cn(letter === " " ? "w-3" : "", className)}>
                {letter}
            </span>
        ))}
      </div>

      {/* LAYER 2: ANIMATING OVERLAY 
        Positioned absolutely on top of the clone. 
        It can jitter all it wants, but it won't push the layout.
      */}
      <div className="absolute top-2 left-0 flex">
        <AnimatePresence mode="wait">
            {displayText.map((letter, i) => (
            <motion.h1
                key={i}
                className={cn(letter === " " ? "w-3" : "", className)}
                {...framerProps}
            >
                {letter}
            </motion.h1>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}