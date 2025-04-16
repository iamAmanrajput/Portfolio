import React from "react";
import { SectionTitle } from "./ui/SectionTitle";

export function Leetcode() {
  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Leetcode Progress</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Leetcode Activity Image */}
          <div className="relative w-full h-[25rem] overflow-hidden">
            <iframe
              src="https://leetcard.jacoblin.cool/JaaniRajput?theme=dark&font=Inter&ext=activity&border=2&radius=10"
              title="Leetcode Activity"
              className="absolute w-full h-full shadow-md"
            ></iframe>
          </div>

          {/* Leetcode Journey Text */}
          <div>
            <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              My Leetcode Journey
            </h3>
            <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
              Solving problems on Leetcode has helped me strengthen my Data
              Structures and Algorithms skills. I enjoy tackling challenges that
              push my problem-solving abilities and prepare me for technical
              interviews.
            </p>
            <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
              I've completed hundreds of problems across a variety of topics,
              including arrays, trees, graphs, and dynamic programming. My goal
              is to keep improving and stay consistent in learning and solving
              new problems daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
