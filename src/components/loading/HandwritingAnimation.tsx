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
      <div className="text-center">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              if (index === text.length - 1) {
                setAnimationCompleted(true);
              }
            }}
            className={`inline-block text-6xl md:text-8xl font-bold ${
              animationCompleted
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-800 dark:text-gray-200"
            }`}
            style={{ fontFamily: "cursive" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
