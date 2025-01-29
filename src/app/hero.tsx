"use client";

import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const greeting = new Date().getHours() < 12 ? "Good Morning!" : "Hello!";

  return (
      <div className="relative w-full bg-gray-50 ml-12">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] px-6 sm:px-8 md:px-12 py-6 md:py-8 gap-6 items-center">
          <div className="container mx-auto flex flex-col space-y-4 text-left">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold italic font-mono bg-gradient-to-br from-[#4C7F7E] to-[#F4A261] bg-clip-text text-transparent"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
              Alexis Lee
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
              Aspiring Data & AI Solutions Architect
            </p>
            <p className="text-md sm:text-lg text-gray-700 max-w-2xl">
              {greeting} Welcome to my portfolio.
            </p>
            <p className="text-md sm:text-lg text-gray-700 max-w-2xl">
              Currently refining my database knowledge, leading student projects as a
              Scrum Master, and exploring ethical AI integrations.
            </p>
            <div>
              <h2 className="text-md sm:text-lg font-semibold text-gray-900">Let’s Connect:</h2>
              <div className="flex space-x-3 sm:space-x-4 mt-3">
                <button
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all focus:ring-2 focus:ring-blue-500"
                    onClick={() => window.open("https://www.linkedin.com/in/alexisbinchlee/")}
                    title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-lg sm:text-xl text-gray-900"/>
                </button>
                <button
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all focus:ring-2 focus:ring-gray-500"
                    onClick={() => window.open("https://github.com/alexiwisteria")}
                    title="GitHub"
                >
                  <i className="fa-brands fa-github text-lg sm:text-xl text-gray-900"/>
                </button>
              </div>
            </div>

            <button
                className="mt-4 sm:mt-5 py-2 sm:py-3 px-5 sm:px-6 bg-[#8D99AA] text-white rounded-lg shadow-md hover:bg-[#717B8C] transition-all focus:ring-2 focus:ring-[#8D99AA]"
                onClick={() => window.open("/portfolio")}
            >
              View My Projects
            </button>
          </div>
          <div className="flex justify-center items-center w-full h-full p-4 sm:p-5">
            <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZ4cmUwZGNjaDd0c2M5YWZmMHBoZGVlZmNvNjA2eW5pOWdzcHJ1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RkX2zcpO79EAf82ESl/giphy.gif"
                alt="Animated GIF"
                className="w-3/4 sm:w-2/3 h-auto object-contain"
            />
          </div>
        </div>
      </div>
  );
}

export default Hero;
