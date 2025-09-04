import AnimatedPage from "./AnimatedPage";

const Projects = () => {
  return (
    <AnimatedPage>
      <div className="px-4 pt-20 md:px-12 lg:px-24 bg-black min-h-screen">
        <h1
          className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
          {/* PROJECT 1 */}
          <div className="bg-gray-700/60 backdrop-blur-md border border-gray-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
            <h3 className="text-xl font-semibold text-white">
              Easy Meals Recipe Website
            </h3>
            <p className="mt-2 text-gray-300">
              A dynamic recipe website built with Laravel Blade, PHP, CSS, and
              HTML, featuring user-friendly recipe browsing, searching, and
              categorized content.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                Laravel Blade
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                PHP
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                CSS
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                HTML
              </span>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Devonpedraza/RecipeWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.loom.com/share/58bafe9b43b0495c8eb7415acf04fc35?sid=f72e214b-3e96-4f10-a8b9-4bee2cbb5eb2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
              >
                Video Demo
              </a>
            </div>
          </div>
          {/* PROJECT 2 */}
          <div className="bg-gray-700/60 backdrop-blur-md border border-gray-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
            <h3 className="text-xl font-semibold text-white">
              Zentra eCommerce
            </h3>
            <p className="mt-2 text-gray-300">
              A fully responsive eCommerce website built with HTML, CSS, and
              JavaScript, featuring dynamic product listings and a seamless user
              shopping experience.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                HTML
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                CSS
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                JavaScript
              </span>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Devonpedraza/Devonpedraza.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://devonpedraza.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="bg-gray-700/60 backdrop-blur-md border border-gray-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
            <h3 className="text-xl font-semibold text-white">
              Alzheimer’s Classifier
            </h3>
            <p className="mt-2 text-gray-300">
              AWS-deployed full-stack app with an integrated AI model predicting
              4 stages of Alzheimer’s with 98.44% accuracy.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                React
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                AWS
              </span>
              <span className="px-2 py-1 text-sm bg-blue-600 text-white rounded-full">
                Python
              </span>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Devonpedraza/AlzheimersClassifier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://youtu.be/rIK0R3KEAQg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
              >
                Video Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
