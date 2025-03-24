import React, { useState } from "react";
import EducationLoader from "./ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "High School Diploma",
      school: "Preah Monivong High School",
      mascot: "📘",
      year: "2008-2021",
      achievements: ["Diploma: B"],
      skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
      description:
        "",
    },
    {
      degree: "English Course",
      school: "COERR Language Skills Center",
      mascot: "📗",
      year: "2017 - 2021",
      achievements: ["Level: 9"],
      skills: ["Listening", "Reading", "Speaking", "Writing"],
      description:
        "",
    },
    {
      degree: "C, C++, OOP + Project Courses",
      school: "ETEC Center",
      mascot: "📘",
      year: "2022",
      achievements: ["Subject: Programming"],
      skills: ["Algorithm", "OOP", "Problem Solving"],
      description:
        "",
    },
    {
      degree: "Bachelor Degree in Computer Science",
      school: "Cambodia Academy of Digital Technology ",
      mascot: "📗",
      year: "2022 - Current",
      achievements: [""],
      skills: ["Software Engineering"],
      description:
        "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden py-40 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90"
    >
      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Educational Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="flex items-center gap-2 text-lg text-gray-300">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="pl-3 text-sm italic text-gray-300 border-l-2 border-teal-500">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1 text-sm text-teal-400 rounded-full bg-teal-500/10"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs text-blue-300 rounded bg-blue-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
