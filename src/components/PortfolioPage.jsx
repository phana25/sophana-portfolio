import React from "react";
import profileImage from "../assets/images/profile.jpeg";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto md:flex-row">
        <div className="max-w-2xl content">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Sophat Sophana. Currently, I am a computer science student, who loves the fields of robotics and software
            engineering. Apart from coding, I enjoy playing soccer and exploring new. Since middle
            school, photography has allowed me to connect with the world and my surroundings.
            Furthermore, I like to give back to the community by volunteering for various programs.
            Also, I want to push myself outside my comfort zone by attending boot camps to improve
            my skills and learn more from the program and other participants. I am hard-working and
            focused on my tasks, but sometimes if I have too much pressure, I will pull myself out and
            then continue on my work.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="object-cover rounded-lg shadow-lg w-72 h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
