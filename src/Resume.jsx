import AnimatedPage from "./AnimatedPage";

const Resume = () => {
  return (
    <AnimatedPage>
    <div className="min-h-screen black py-12 px-6 flex flex-col items-center bg-black">
      <h1 className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight pt-5 text-white" style={{ fontFamily: 'Playfair Display, serif'}}>My Resume</h1>
      <p className="text-white mb-8 text-center max-w-xl">
        You can view my resume below or download a PDF version for later.
      </p>

      {/* Resume Embed */}
      <div className="w-full max-w-4xl h-[900px] shadow-lg border rounded-lg overflow-hidden">
        <iframe
          src="/docs/DevonResume.pdf"
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/docs/DevonResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="DevonResume.pdf"
        className="mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-500 transition"
      >
        Download Resume
      </a>
    </div>
    </AnimatedPage>
  );
};

export default Resume;
