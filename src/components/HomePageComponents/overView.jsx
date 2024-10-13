import React from "react";
import Event1 from "../../assets/event1.webp"

const OverView = () => {
  return (
    <div className="bg-black md:pt-32 pt-16">
      {/* 1st hero-section */}
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            Get the latest info about <span class="text-green-600">TEKNOFEST</span>
            </h1>
            <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              HTeknofest Pakistan is a cutting-edge technology and innovation festival, dedicated to fostering creativity, entrepreneurship, and scientific development. Drawing inspiration from the globally renowned Teknofest, this event brings together the brightest minds, forward-thinking startups, and tech enthusiasts from across the nation. Focused on promoting advancements in fields such as robotics, artificial intelligence, aerospace, and green technologies, Teknofest Pakistan offers participants an opportunity to showcase their innovations, compete in national competitions, and engage with industry experts.
            </p>
          </div>

          <div class="relative ms-4">
            <img
              class="w-full rounded-md"
              src={Event1}
              alt="Hero Image"
            />
            <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

            <div class="absolute bottom-0 start-0">
              <svg
                class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
