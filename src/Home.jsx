import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedPage from "./AnimatedPage";
import { ReactTyped } from "react-typed";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SiGoogledocs } from "react-icons/si";

const Home = () => {
  const [isTypingComplete, setTypingComplete] = useState(false);
  const finalString =
    "“Passionate about creating seamless web experiences and learning new technologies.”";

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 px-4 pt-20 md:px-12 lg:px-10">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-white mx-auto"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            I Am Devon Pedraza
          </h1>
          <p className="mt-4 text-md sm:text-xl md:text-xl text-white mx-auto">
            {!isTypingComplete ? (
              <ReactTyped
                strings={[finalString]}
                typeSpeed={20}
                loop={false}
                showCursor={true}
                onComplete={() => setTypingComplete(true)}
              />
            ) : (
              <span>{finalString}</span>
            )}
          </p>

          {/* --- BUTTONS --- */}
          <div className="flex flex-wrap mx-auto justify-center md:justify-center mt-6 gap-3">
            {/* Primary CTA */}
            <a
              href="/docs/DevonResumeFinal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              <SiGoogledocs className="mr-2" /> Resume
            </a>

            {/* Primary CTA */}
            <a
              href="/docs/CoverLetter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              <SiGoogledocs className="mr-2" /> Cover Letter
            </a>

            {/* Branded Social */}
            <a
              href="https://linkedin.com/in/devon-pedraza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>

            {/* Secondary Social (Outline Style) */}
            <a
              href="https://github.com/devonpedraza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-transparent border border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors"
            >
              <FaGithub className="mr-2" /> Github
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full">
          <div className="overflow-hidden rounded-tl-[200px] rounded-br-[80px] shadow-2xl w-full max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] aspect-square">
            <img
              src="/src/images/Headshot2 - Copy.jpg"
              alt="Head Shot of Devon Pedraza"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="px-4 pt-20 md:px-12 lg:px-10">
        <h1
          className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          ABOUT ME
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 lg:px-10 pt-15">
          <div className="flex items-center justify-center w-full">
            <div className="overflow-hidden rounded-tr-[100px] rounded-bl-[70px] shadow-2xl w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] aspect-square">
              <img
                src="/src/images/Headshot2.jpg"
                alt="Head Shot of Devon Pedraza"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <p className="flex justify-center items-center text-3xl text-white">
            Hi, I’m Devon Pedraza — a Graduate Computer Science student from
            Florida Southern College with a strong focus on Full Stack Web
            Development. Over the past few years, I’ve built projects using
            React, Vue 3, HTML, CSS, JavaScript. I enjoy creating responsive and
            user-friendly applications. I’m especially passionate about
            designing clean, modern interfaces that make technology more
            accessible. Outside of class, I’ve gained experience through
            personal projects and freelance work, and I’m excited to continue
            growing as a developer. My goal is to build impactful digital
            experiences and grow into a career as a Full Stack Developer.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="gap-8 px-4 pt-20 md:px-12 lg:px-10 min-h-screen">
        <h1
          className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          COURSES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
            {/* CSC 4899 · Senior Project */}
            <div className="bg-white/10 backdrop-blur-md border border-gray-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-semibold text-white">
                  CSC 4899 · Senior Project
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Capstone
                  </span>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    AI
                  </span>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Web Dev
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Collaborated in a team to build a web application providing
                Alzheimer's information and an AI bot capable of detecting
                conditions from MRI scans with 98.44% accuracy. Developed the
                application using HTML and CSS, deployed it on AWS, and
                delivered a fully functional, publicly accessible online
                platform. Gained experience in web development, AI integration,
                and cloud deployment.
              </p>
            </div>

            {/* CSC 4610 · Advanced Web Development */}
            <div className="bg-white/10 backdrop-blur-md border border-gray-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-semibold text-white">
                  CSC 4610 · Advanced Web Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Web Dev
                  </span>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Full Stack
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explored advanced web topics such as security, UX, and
                mobile-friendly design while building a full-stack recipe
                application using PHP, Laravel, and SQLite, featuring user
                authentication, data persistence, and dynamic content.
              </p>
            </div>
        </div>
        <div className="flex items-center justify-center pt-20">
          {/* --- REVISED 'SEE MORE' BUTTON --- */}
          <RouterLink
            to="/courses"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center px-12 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            See more
          </RouterLink>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
