import React, { useState } from "react";
import { motion } from "framer-motion";

export function HandwritingAnimation() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  // Text to animate
  const text = "Aman Kumar";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center relative">
        {/* Decorative underline */}
        {animationCompleted && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute -bottom-4 left-0 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
          />
        )}

        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: char !== " " ? Math.random() * 6 - 3 : 0, // Random slight rotation for each character
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
            }}
            onAnimationComplete={() => {
              if (index === text.length - 1) {
                setAnimationCompleted(true);
              }
            }}
            className="inline-block"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize:
                char !== " " ? `${Math.random() * 0.5 + 4.5}rem` : "4.5rem", // Slightly varied font sizes
              color: animationCompleted
                ? "rgb(59, 130, 246)"
                : "rgb(31, 41, 55)",
              filter: animationCompleted
                ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))"
                : "none",
              transform: `translateY(${
                char !== " " ? Math.random() * 6 - 3 : 0
              }px)`, // Random slight vertical offset
              fontWeight: "normal",
              textShadow: animationCompleted
                ? "2px 2px 4px rgba(0,0,0,0.1)"
                : "none",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
