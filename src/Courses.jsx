import AnimatedPage from "./AnimatedPage";

const courses = [
  {
    level: "4000-Level Courses",
    items: [
      {
        title: "CSC 4899 · Senior Project",
        description:
          "Collaborated in a team to build a web application providing Alzheimer's information and an AI bot capable of detecting conditions from MRI scans with 98.44% accuracy. Developed the application using HTML and CSS, deployed it on AWS, and delivered a fully functional, publicly accessible online platform. Gained experience in web development, AI integration, and cloud deployment.",
        badges: ["Capstone", "AI", "Web Dev"],
      },
      {
        title: "CSC 4610 · Advanced Web Development",
        description:
          "Explored advanced web topics such as security, UX, and mobile-friendly design while building a full-stack recipe application using PHP, Laravel, and SQLite, featuring user authentication, data persistence, and dynamic content.",
        badges: ["Web Dev", "Full Stack"],
      },
      {
        title: "CSC 4410 · Operating Systems & Concurrency",
        description:
          "Examined processes, scheduling, memory management, and file systems while implementing concurrent programming and synchronization concepts.",
        badges: ["Systems", "Concurrency"],
      },
    ],
  },
  {
    level: "3000-Level Courses",
    items: [
      {
        title: "CSC 3810 · Principles of Computer Networking",
        description:
          "Explored the core elements of modern computer networks alongside the fundamentals of cybersecurity. Discussed how the internet has become a new frontier for crime, international relations, and modern warfare, while gaining hands-on experience building secure lab environments.",
        badges: ["Networking", "Cybersecurity"],
      },
      {
        title: "CSC 3610 · Introduction to Web Development",
        description:
          "Gained practical experience building web pages and applications using modern markup languages and styling rules (HTML & CSS). Implemented server-side scripting for dynamic content and applied basic frameworks to improve site quality, accessibility, and behavior.",
        badges: ["Web Dev"],
      },
      {
        title: "CSC 3400 · Software Engineering",
        description:
          "Collaborated in a team to design and implement a text-based mobile app using Dart and Flutter in Android Studio, featuring real-time messaging and an AI chatbot. Gained experience in software lifecycles, agile methods, object-oriented design, and testing.",
        badges: ["Software Eng", "AI"],
      },
      {
        title: "CIS 263 · Data Structures and Algorithms",
        description:
          "Explored data structures (arrays, stacks, queues, linked lists, trees, graphs, heaps, hash tables) and algorithms including divide-and-conquer, greedy methods, dynamic programming, and graph algorithms. Implemented solutions in Python while analyzing algorithm efficiency, complexity classes (P, NP, NPC), and approximation/randomized strategies.",
        badges: ["Algorithms", "Data Structures"],
      },
      {
        title: "CSC 3350 · Computer Game Design",
        description:
          "Learned and applied fundamental game design concepts, including basic physics, collision detection, and computer graphics techniques. Developed and designed small games, while exploring ethical considerations in game development. Gained hands-on experience in creating interactive and functional games from concept to implementation.",
        badges: ["Game Design", "Graphics"],
      },
      {
        title: "CSC 3340 · Database Management Systems",
        description:
          "Learned to design and manage relational databases with multiple tables, write SQL queries and commands, and interact with NoSQL databases. Developed applications in an imperative language that connect to and manipulate databases, gaining hands-on experience with data storage, retrieval, and optimization.",
        badges: ["Databases", "SQL", "NoSQL"],
      },
      {
        title: "CSC 3310 · Computer Organization & Architecture",
        description:
          "Explored digital systems, logic circuits, and modern CPU architectures beginning with the von Neumann model.",
        badges: ["Architecture", "Systems"],
      },
      {
        title: "CSC 3280 · Data Structures",
        description:
          "Developed and analyzed key data structures including arrays, stacks, queues, linked lists, trees, and graphs, with an emphasis on algorithmic efficiency.",
        badges: ["Data Structures", "Algorithms"],
      },
    ],
  },
];

const CourseCard = ({ title, description, badges }) => (
  <div className="bg-white/10 backdrop-blur-md border border-gray-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-xl font-semibold text-white">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {badges?.map((badge) => (
          <span
            key={badge}
            className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const Courses = () => {
  return (
    <AnimatedPage>
      <div className="px-4 pt-20 md:px-12 lg:px-24 min-h-screen pb-16">
        <h1
          className="flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Courses
        </h1>

        {courses.map((category) => (
          <div key={category.level} className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-500 pb-2">
              {category.level}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((course) => (
                <CourseCard
                  key={course.title}
                  title={course.title}
                  description={course.description}
                  badges={course.badges}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Courses;
