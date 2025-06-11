import { useRef, useState } from "react";
import { motion } from "framer-motion";
// import SIH from "../assets/sih.pdf"

// Sample data for education
const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institute: "MIT Academy of Engineering",
    duration: "2022-2026",
    grade: "9.46 GPA",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database and Backend Development",
      "Cloud Computing",
      "Networking and Operating Systems",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    institute: "KR. Kotkar Junior High School",
    duration: "2020-2022",
    grade: "76.17%",
    coursework: ["Computer Science", "Mathematics", "Physics", "IT"],
    // projects: "Led the school robotics team to state finals"
  },
  {
    degree: "Secondary School Certificate",
    institute: "St. Therese Convent High School",
    duration: "2019-2020",
    grade: "90.40%",
    coursework: ["Science", "Maths", "Social Science"],
  },
];

// Sample data for achievements
const achievementsData = [
  {
    title: "Smart India Hackathon Finalist",
    issuer: "Ministry of Defence",
    date: "December 2024",
    details: [
      "Developed an AI-powered Interview Panel Generation",
      "Implemented machine learning algorithms for expert relevancy score calculation with the JD",
      "Created responsive UI with React and Material UI",
      "Secured 2nd position among 134 teams",
    ],
    link: "/sih.jpg",
  },
  {
    title: "Cavista Hackathon Finalist",
    issuer: "Cavista",
    date: "February 2025",
    details: [
      "Built a progressive web app healthcare inventory management",
      "Implemented re-ordering mechanism upon low stock levels",
      "Designed intuitive UI with Figma and implemented with Tailwind CSS",
      "Presented to audience of 10+ Professionals of Cavista and secured 5th Position among 3 Colleges",
    ],
    link: "#",
  },
];

// Card component for achievements
const AchievementCard = ({ item, index, onViewCertificate }) => {
  return (
    <motion.div
      className={`glass-card max-w-2xl mx-auto my-8 ${
        index % 2 === 0 ? "ml-0 mr-auto" : "mr-0 ml-auto"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-primary">{item.issuer}</span>
        <span className="text-sm text-gray-700">{item.date}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {item.details.map((detail, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-gray-800">{detail}</span>
          </li>
        ))}
      </ul>
      {item.link && (
        <button
          onClick={() => onViewCertificate(item.link)}
          className="text-primary mt-4 inline-block hover:underline"
        >
          View Certificate
        </button>
      )}
    </motion.div>
  );
};

// Card component for education
const EducationCard = ({ item, index }) => {
  return (
    <motion.div
      className={`glass-card max-w-2xl mx-auto my-8 ${
        index % 2 === 1 ? "ml-0 mr-auto" : "mr-0 ml-auto"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold">{item.degree}</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-primary">{item.institute}</span>
        <span className="text-sm text-gray-800">{item.duration}</span>
      </div>
      <p className="mt-2 text-gray-700">Grade: {item.grade}</p>
      <div className="mt-4">
        <h4 className="text-md font-medium">Relevant Coursework:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {item.coursework.map((course, idx) => (
            <span key={idx} className="tag">
              {course}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-4 text-gray-300">{item.projects}</p>
    </motion.div>
  );
};

const EducationAchievements = () => {
  const sectionRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">
            Education & Achievements
          </h2>
          <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
            My academic journey and notable accomplishments that have shaped my
            development career.
          </p>
        </motion.div>

        <div className="relative" ref={sectionRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

          {/* Education Section */}
          <div className="mb-16">
            <motion.h3
              className="text-2xl font-semibold text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>

            <div className="space-y-4">
              {educationData.map((item, index) => (
                <EducationCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Achievements
            </motion.h3>

            <div className="space-y-4">
              {achievementsData.map((item, index) => (
                <AchievementCard
                  key={index}
                  item={item}
                  index={index}
                  onViewCertificate={(link) => setSelectedCertificate(link)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Certificate Viewer */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-3xl w-[90%] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Border Wrapper */}
            <div
              className="relative p-[6px] rounded-3xl"
              style={{
                background:
                  "linear-gradient(to top right, #020024 25%, #090088 60%, #05004E 90%)",
              }}
            >
              {/* Glassmorphism Inner Box */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
                <img
                  src={selectedCertificate}
                  alt="Certificate"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Clean Floating Close Button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-8 -right-8 text-white text-4xl hover:text-secondary transition"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationAchievements;
