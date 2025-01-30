"use client";

import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const greeting = new Date().getHours() < 12 ? "Good Morning!" : "Hello!";

  return (
      <div className="relative w-full bg-gray-50 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-sm sm:max-w-screen-lg mx-auto px-3 sm:px-6 py-4 md:py-6 gap-4 sm:gap-6 items-center">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl font-bold italic font-mono bg-gradient-to-br from-[#4C7F7E] to-[#F4A261] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              Alexis Lee
            </motion.h1>
            <p className="text-base sm:text-xl text-gray-700">Aspiring Data & AI Solutions Architect</p>
            <p className="text-sm sm:text-lg text-gray-700">{greeting} Welcome to my portfolio.</p>
            <p className="text-sm sm:text-lg text-gray-700">
              Currently refining my database knowledge, leading student projects as a Scrum Master, and exploring ethical AI integrations.
            </p>

            <div>
              <h2 className="text-sm sm:text-lg font-semibold text-gray-900">Let’s Connect:</h2>
              <div className="flex space-x-2 sm:space-x-4 mt-2 sm:mt-3">
                <button
                    className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition focus:ring-2 focus:ring-blue-500"
                    onClick={() => window.open("https://www.linkedin.com/in/alexisbinchlee/")}
                    title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-base sm:text-xl text-gray-900" />
                </button>
                <button
                    className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition focus:ring-2 focus:ring-gray-500"
                    onClick={() => window.open("https://github.com/alexiwisteria")}
                    title="GitHub"
                >
                  <i className="fa-brands fa-github text-base sm:text-xl text-gray-900" />
                </button>
              </div>
            </div>

            <button
                className="mt-2 sm:mt-4 py-2 sm:py-3 px-3 sm:px-5 bg-[#8D99AA] text-white rounded-lg shadow-md hover:bg-[#717B8C] transition focus:ring-2 focus:ring-[#8D99AA]"
                onClick={() => window.open("https://github.com/alexiwisteria?tab=repositories")}
            >
              View My Projects
            </button>
          </div>

          <div className="flex justify-center">
            <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWVybjNyNXBqcXB1OGQ0YW14dzRweG12b2ViczQ0ZDlrczJ0Mmt3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RkX2zcpO79EAf82ESl/giphy.gif"
                alt="Animated GIF"
                className="w-4/5 sm:w-2/3 h-auto"
            />
          </div>
        </div>
      </div>
  );
}

export default Hero;
