import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary, Binoculars } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="relative overflow-hidden transition-all duration-300 transform group hover:-translate-y-2">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 rounded-lg backdrop-blur-lg bg-white/5" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative h-full p-8 border rounded-lg shadow-xl bg-gray-900/90 border-gray-800/50 backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute transition-all duration-500 rounded-full opacity-25 -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl group-hover:opacity-75 animate-pulse" />
        <Icon className="relative z-10 w-12 h-12 transition-transform duration-300 transform text-cyan-400 group-hover:rotate-12" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
          {title}
        </h3>
        <div className="flex items-center justify-between text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="px-3 py-1 font-mono text-sm rounded-full bg-blue-500/10">
            {period}
          </span>
        </div>
        <p className="pl-4 mt-4 leading-relaxed text-gray-300 border-l-4 border-blue-500/50">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute w-20 h-20 top-4 right-4">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute w-20 h-20 bottom-4 left-4">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Binoculars,
      title: "Makerspace Research Intern",
      company: "Institute of Digital Research & Innovation: IDRI",
      period: "02/01/2024 - 02/04/2024",
      description:
        "This internship focused on the localization of a mobile robot. This localization solution provides the omnidirectional robot with reliable, real-time position updates. This enhanced awareness is essential for precise navigation, task execution, and autonomous decision-making within the demanding ROBOCON 2024 environment.",
    },

    {
      icon: Code2,
      title: "Software Developer Intern",
      company: "BookMeBus",
      period: "2024 - Present",
      description:
        "Develop a self-service event management portal.",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90"
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500/20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="container relative px-6 mx-auto mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center mb-20 space-y-8">
            <div className="relative">
              <h2 className="text-5xl font-black text-center text-transparent md:text-7xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
                Professional Journey
              </h2>
              <div className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
            </div>
            <p className="max-w-2xl text-lg font-medium tracking-wide text-center text-gray-400 md:text-xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute rounded-full top-20 left-20 w-96 h-96 bg-cyan-500/10 filter blur-3xl animate-pulse" />
        <div className="absolute delay-1000 rounded-full bottom-20 right-20 w-96 h-96 bg-purple-500/10 filter blur-3xl animate-pulse" />
      </div>
    </>
  );
};

export default ExperienceSection;
