import AnimatedPage from "./AnimatedPage";
import { SiGoogledocs } from "react-icons/si";

const Resume = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen py-12 px-6 flex flex-col items-center bg-black">
        <h1
          className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight pt-5 text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Resume & Cover Letter
        </h1>
        <p className="text-white mb-8 text-center max-w-xl">
          You can view my resume and cover letter below or download PDF versions
          for later.
        </p>

        {/* Resume & Cover Letter Side by Side */}
        <div className="w-full max-w-7xl flex flex-col md:flex-col lg:flex-row gap-8">
          {/* Resume Section */}
          <div className="flex-1 flex flex-col items-center w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Resume</h2>
            <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] shadow-lg border rounded-lg overflow-hidden bg-gray-900 mx-auto">
              <iframe
                src="/docs/DevonResumeFinal.pdf"
                className="w-full h-full"
                title="Resume"
              ></iframe>
            </div>
            <a
              href="/docs/DevonResumeFinal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="DevonResume.pdf"
              className="flex justify-center items-center mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-500 transition w-full text-center"
            >
              <SiGoogledocs className="mr-2" /> Download Resume
            </a>
          </div>
          {/* Cover Letter Section */}
          <div className="flex-1 flex flex-col items-center w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Cover Letter</h2>
            <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] shadow-lg border rounded-lg overflow-hidden bg-gray-900 mx-auto">
              <iframe
                src="/docs/CoverLetter.pdf"
                className="w-full h-full"
                title="Cover Letter"
              ></iframe>
            </div>
            <a
              href="/docs/CoverLetter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CoverLetter.pdf"
              className="flex items-center justify-center mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-500 transition text-center w-full"
            >
              <SiGoogledocs className="mr-2" /> Download Cover Letter
            </a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Resume;
