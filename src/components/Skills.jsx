import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Code, Database, BrainCircuit, Cpu, Cloud, Bot, Smartphone, Network, LucideMountainSnow } from "lucide-react";
import {
  FaPython,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaLaravel,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiArduino,
  SiOpencv,
  SiKicad,
  SiMysql,
  SiRubyonrails,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiDart,
  SiFlutter,
  SiPandas,
  SiScikitlearn,
  SiHeroku,
} from "react-icons/si";
import { TbChartDonut4 } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2, BsRobot } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="relative z-10 p-6">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="relative flex items-center gap-2 px-3 py-2 text-gray-100 transition-all duration-300 border-gray-600 group/badge bg-gray-800/50 hover:bg-gray-700/80 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transition-transform duration-300 transform group-hover/badge:scale-110">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-yellow-400",
      skills: [
        {
          name: "C",
          icon: <SiC className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "C++",
          icon: <SiCplusplus className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Java",
          icon: <Cpu className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-4 h-4 text-[#FFCA28]" />,
        },
        {
          name: "Ruby",
          icon: <MdAnimation className="w-4 h-4 text-[#C21325]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "PHP",
          icon: <FaPhp className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="w-4 h-4 text-[#764ABC]" />,
        },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "text-[#38B2AC]",
      skills: [
        {
          name: "Flutter",
          icon: <SiFlutter className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Dart",
          icon: <SiDart className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Network,
      title: "Framework",
      color: "text-[#38B2AC]",
      skills: [
        { name: "Ruby On Rails", 
          icon: <SiRubyonrails className="w-4 h-4 text-[#C21325]" />
        },
        { name: "Laravel", 
          icon: <FaLaravel className="w-4 h-4 text-[#C21325]" />
        },
      ],
    },
    {
      icon: Bot,
      title: "Robotic",
      color: "text-purple-400",
      skills: [
        { name: "Robotic Operating System", icon: <BsRobot className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Arduino",
          icon: <SiArduino className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Kicad",
          icon: <SiKicad className="w-4 h-4 text-[#3776AB]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        {
          name: "Heroku",
          icon: <SiHeroku className="w-4 h-4 text-[#764ABC]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: BrainCircuit,
      title: "AI/ML",
      color: "text-pink-400",
      skills: [
        {
          name: "OpenCV",
          icon: <SiOpencv className="w-4 h-4 text-[#9CA3AF]" />,
        },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#0e293d]" /> },
        {
          name: "Scikitlearn",
          icon: <SiScikitlearn className="w-4 h-4 text-[#F05032]" />,
        },
        { name: "Seaborn", icon: <LucideMountainSnow className="w-4 h-4 text-[#82B2BE]" /> },
        {
          name: "Matplotlib",
          icon: <TbChartDonut4 className="w-4 h-4 text-[#FFCA28]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "text-green-400",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#E10098]" />,
        },
      ],
    },
  ];

  return (
    <main
      className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 text-white min-h-screen"
    >
      <section className="container px-4 mx-auto py-11">
        <div className="flex items-center justify-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
