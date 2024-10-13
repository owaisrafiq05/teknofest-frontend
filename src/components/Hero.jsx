import React from 'react'

const Hero = () => {
  return (
    <div className="">
    <header className="py-4 bg-black sm:py-6" >
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="shrink-0">
                    <a href="#" title="" className="flex">
                        <img className="w-auto h-9" src="" alt="" />
                    </a>
                </div>

                <div className="flex md:hidden">
                    <button type="button" className="text-white" >
                        <span  aria-hidden="true">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </span>

                        <span  aria-hidden="true">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="relative hidden md:justify-center md:items-center md:inline-flex group">
                    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                    <a href="#" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Get Your Pass </a>
                </div>
            </div>

        </div>
    </header>

    <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-normal tracking-widest uppercase">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Your passion needs a kick </span>
                </p>
                <h1 className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connect & grow with your targeted fellow-aspirants</h1>

                <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                    <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <a href="#" title="" className="relative inline-flex ite ms-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto" role="button"> Browse Now</a>
                    </div>

                    <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white" role="button"> Talk to Organizers </a>
                </div>
            </div>

            <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                {/* <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
                    <svg className="blur-3xl filter" style="filter: blur(64px)" width="645" height="413" viewBox="0 0 645 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z" fill="url(#d)" />
                        <defs>
                            <linearGradient id="d" x1="665.741" y1="178.506" x2="296.286" y2="474.62" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" style="stop-color: var(--color-cyan-500)" />
                                <stop offset="100%" style="stop-color: var(--color-purple-500)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}

                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full opacity-50" src="" alt="" />
                </div>

                <img className="relative w-full max-w-5xl mx-auto" src="" alt="" />
            </div>
        </div>
    </section>
</div>

  )
}

export default Hero