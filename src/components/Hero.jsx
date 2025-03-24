import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
import PortfolioPage from "./PortfolioPage";
import SparklesText from "./ui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import Pdf from '../assets/pdf/Sophat_Sophana_Resume.pdf';

// AnimatedGrid Component
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="relative w-full h-full border-r border-blue-500/10"
                style={{
                  animation: `gridPulse ${
                    2 + Math.random() * 2
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
            {[...Array(40)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="relative w-full h-full border-b border-blue-500/10"
                style={{
                  animation: `gridPulse ${
                    2 + Math.random() * 2
                  }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Software Developer",
  ];

  const [code] = useState(`
const profile = {
    name: 'Sophat Sophana',
    title: 'Software Developer | Problem Solver',
    skills: [
        'C', 'C++', 'Ruby On Rails', 'Python',
        'MySQL', 'Java', 'OpenCv', 'HTML', 'CSS',
        'JavaScript', 'Git', 'Flutter', 'Postgresql'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <main className="pt-20 lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen">
        <section className="relative flex items-center min-h-screen px-4 hero sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>

          {/* Animated Grid Background */}
          <AnimatedGrid />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div className="container relative z-10 flex flex-col items-center justify-between py-12 mx-auto lg:flex-row lg:py-0">
            {/* Left column - Text content */}
            <div className="relative w-full mb-12 lg:w-1/2 lg:mb-0 animate__animated animate__fadeInLeft">
              {/* Decorative blurs */}
              <div className="absolute hidden w-48 h-48 rounded-full lg:-top-20 lg:-left-20 lg:block lg:w-64 lg:h-64 bg-blue-500/10 blur-3xl"></div>
              <div className="absolute hidden w-48 h-48 rounded-full lg:block lg:top-40 lg:-right-20 lg:w-64 lg:h-64 bg-teal-500/10 blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 mb-6 border rounded-full sm:px-4 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-300 sm:text-sm">
                  Welcome to my universe
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I'm
                    <span className="typing-effect gradient-text">
                      {" "}
                      Sophat Sophana
                    </span>
                  </span>
                </h1>
                <div className="absolute w-24 h-24 -translate-y-1/2 rounded-full -z-10 top-1/2 left-1/4 sm:w-32 sm:h-32 bg-blue-500/20 blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border sm:gap-3 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border-blue-500/20 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="text-sm text-blue-400 fas fa-rocket animate-bounce sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative max-w-xl mb-8 sm:mb-12">
                <p className="text-base leading-relaxed sm:text-xl text-gray-300/90">
                A passionate software developer and robotic who thrives on solving complex problems, creating innovative solutions, and continuously learning to push the boundaries of technology.

                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/phana25"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 font-medium text-white">
                      <span>Learn More</span>
                      <i className="transition-all duration-300 transform fas fa-arrow-right group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <a
                  href={Pdf}
                  without rel="noopener noreferrer" target="_blank" className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 font-medium text-gray-300 group-hover:text-white">
                      <span>Get Resume</span>
                      <i className="transition-all duration-300 transform fas fa-envelope group-hover:rotate-12"></i>
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
                <div className="px-4 py-2 text-purple-400 border rounded-lg bg-purple-500/10 backdrop-blur-sm border-purple-500/20">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI
                  Magic
                </div>
              </div>
              <div className="absolute hidden lg:block right-10 top-20 animate-float">
                <div className="px-4 py-2 text-blue-400 border rounded-lg bg-blue-500/10 backdrop-blur-sm border-blue-500/20">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 border rounded-lg bg-amber-500/10 backdrop-blur-sm border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="bg-red-500 window-dot"></div>
                    <div className="bg-yellow-500 window-dot"></div>
                    <div className="bg-green-500 window-dot"></div>
                    <span className="flex items-center gap-2 ml-2 text-sm text-gray-400">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute flex flex-col items-center gap-2 transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <i className="text-blue-400 fas fa-mouse"></i>
            Scroll to explore
          </span>
          <i className="text-xl text-blue-400 fas fa-chevron-down"></i>
        </div>

        <PortfolioPage />
      </main>
    </>
  );
}
