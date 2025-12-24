"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 30;
const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
  text: string;
  className?: string;
};

export const ScrambleText = ({ text, className }: Props) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplayText(text);
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={`cursor-pointer inline-block whitespace-nowrap font-mono ${className}`}
    >
      {displayText}
    </motion.span>
  );
};