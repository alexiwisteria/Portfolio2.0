"use client";

import "@fortawesome/fontawesome-free/css/all.css";
import React from "react"; // Import Font Awesome if needed

function Hero() {
  return (
      <div className="relative w-full">
        <div className="grid place-items-center min-h-[60vh] px-8">
          <div className="container mx-auto grid place-items-center h-max text-center">
            <h1 className="text-4xl font-bold text-blue-gray-700">
              Aspiring Data Solutions Architect:
            </h1>
            <h1 className="text-4xl font-bold text-blue-gray-700">AI & Backend</h1>
            <p className="text-lg text-gray-600 mt-4 mb-4 w-full md:max-w-full lg:max-w-4xl">
              Hello and welcome!
            </p>
            <p className="text-lg text-gray-600 mb-6 w-full md:max-w-full lg:max-w-4xl">
              Here’s what I’m currently focusing on: refreshing my skills in data
              structures, Big O notation, and interfaces while actively exploring
              large language models (LLMs). My goal is to integrate these
              technologies into programs in a way that’s impactful, effective,
              and ethically responsible.
            </p>

            <p className="mt-12 mb-6 text-blue-gray-900 font-medium">
              Let’s Connect:
            </p>
            <div className="gap-2 lg:flex">
              <button
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                  onClick={() => window.open("https://www.linkedin.com/in/alexisbinchlee/")}
                  title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-lg text-gray-900"/>
              </button>
              <button
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                  onClick={() => window.open("https://github.com/alexiwisteria")}
                  title="GitHub"
              >
                <i className="fa-brands fa-github text-lg text-gray-900"/>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Hero;
