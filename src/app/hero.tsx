"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="blue-gray" >
            Aspiring Data Solutions Architect:</Typography>
          <Typography variant="h1" color="blue-gray" >
            AI & Backend
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-4 w-full md:max-w-full lg:max-w-4xl"
          >
            Hello and welcome!
          </Typography>
          <Typography
              variant="lead"
              color="gray"
              className="mb-6 w-full md:max-w-full lg:max-w-4xl"
          >
            Here’s what I’m currently focusing on: refreshing my skills in data structures, Big O notation, and interfaces while actively exploring large language models (LLMs). My goal is to integrate these technologies into programs in a way that’s impactful, effective, and ethically responsible.
          </Typography>

          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
