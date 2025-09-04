import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import AnimatedPage from "./AnimatedPage";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xjhqgii", // Service ID
        "template_0ys0oap", // Template ID
        form.current,
        "BCK1uwRuR6YxIJJI5" // Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully ✅", {
            style: {
              background: "#2563eb",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "0.5rem",
              fontWeight: "500",
              minWidth: "200px",
              textAlign: "center",
            },
            position: "top-right",
            duration: 4000,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong ❌", {
            style: {
              background: "#dc2626",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "0.5rem",
              fontWeight: "500",
              minWidth: "200px",
              textAlign: "center",
            },
            position: "top-right",
            duration: 4000,
          });
          console.error(error);
        }
      );
  };

  return (
    <AnimatedPage>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-gray-700/60 backdrop-blur-md border border-gray-500 rounded-2xl p-8 shadow-lg">
          <h1
            className="text-3xl font-bold text-white text-center mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get in Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 bg-gray-900/50 text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 bg-gray-900/50 text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full mt-1 px-4 py-2 border border-gray-400 bg-gray-900/50 text-white placeholder-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              If the form isn’t working, feel free to contact me directly:
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="mailto:devonpedraza123@gmail.com"
                className="text-blue-400 hover:underline"
              >
                devonpedraza123@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/Devon-pedraza/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
