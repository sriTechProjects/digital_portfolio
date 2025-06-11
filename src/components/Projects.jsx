import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Event RSVP & Attendance Management System",
    description:
      "A .NET-based system to manage event invitations, RSVP, and attendance tracking.",
    image: "/placeholder.svg",
    category: "Mini Projects",
    tags: ["ASP.NET Core", "C#", "SQL Server"],
    learnings: [
      "MVC pattern in .NET",
      "Entity Framework usage",
      "Role-based access control",
      "CRUD operations with Razor Pages",
    ],
    github: "https://github.com/sriTechProjects/RSVP_.NET",
    demo: "https://example.com",
    details:
      "The system allows event organizers to create events, attendees to RSVP, and manages attendance with reports. Admins can manage events, track RSVPs, and mark attendance. Features like email reminders and QR check-in are planned.",
    role: "Backend Developer",
    challenges:
      "Managing relationships between attendees and events and implementing dynamic RSVP logic were key challenges.",
    // screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 2,
    title: "Expert Board Relevancy Matching System",
    description:
      "A project focused on matching experts to board positions based on relevancy using ML/NLP.",
    image: "/placeholder.svg",
    category: "Major Projects",
    tags: ["Machine Learning", "NLP", "Python", "Flask"],
    learnings: [
      "Text vectorization techniques",
      "Cosine similarity and relevancy scoring",
      "Flask API development",
      "Document parsing and preprocessing",
    ],
    github: "https://github.com/sriTechProjects/SIH_WT_Project",
    demo: "https://example.com",
    details:
      "This system takes expert profiles and board requirements as input, processes text using NLP, and ranks profiles based on relevance using cosine similarity and embeddings. A simple Flask interface was used to show matches.",
    role: "Backend and DB Schema Developer",
    challenges:
      "Handling unstructured data and designing efficient similarity algorithms posed significant challenges.",
    screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 3,
    title: "Saarthi – E-Commerce for MSMEs",
    description:
      "A full-stack e-commerce platform tailored for micro and small businesses.",
    image: "/placeholder.svg",
    category: "Major Projects",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    learnings: [
      "Component-based frontend design",
      "Backend API structuring",
      "Recommendation system integration",
      "Dynamic pricing engine implementation",
    ],
    github: "https://github.com/sriTechProjects/Saarthi_Major_Project",
    demo: "https://example.com",
    details:
      "Saarthi enables local businesses to onboard, list products, and sell through a centralized platform. The platform includes dynamic pricing, recommendation systems, user dashboards, and secure authentication mechanisms.",
    role: "Backend Developer",
    challenges:
      "Incorporating ML-based features like recommendations and pricing while keeping performance smooth was a key challenge.",
    screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 4,
    title: "AimHire – Job Portal for Recruiters & Applicants",
    description:
      "A recruitment platform connecting job seekers and recruiters with dashboards and admin control.",
    image: "/placeholder.svg",
    category: "Mini Projects",
    tags: ["React", "Express", "MySQL", "Nodemailer"],
    learnings: [
      "Dashboard creation",
      "REST API consumption with Axios",
      "Session handling and auth logic",
      "Database structuring and optimization",
    ],
    github: "https://github.com/sriTechProjects/Job_Portal_Super_30",
    demo: "https://example.com",
    details:
      "The system supports applicant registration, job posting by recruiters, resume uploads, and admin-level monitoring. Features include email notifications, session-based authentication, and role-based access.",
    role: "Frontend Developer & Backend Reviewer",
    challenges:
      "Coordinating multi-role access and structuring the backend logic for job applications was a significant task.",
    screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 5,
    title: "Bulk File Renamer",
    description:
      "A utility tool to rename files in bulk using pattern-based rules and dynamic placeholders.",
    image: "/placeholder.svg",
    category: "Tech Practice",
    tags: ["Java", "Swing UI", "Apache NetBeans IDE"],
    learnings: [
      "Filesystem manipulation in Java",
      "Pattern recognition using Regex",
      "Swing Component based UI",
      "Error handling and logging",
    ],
    github: "https://github.com/sriTechProjects/bulkFileRenamer",
    demo: "https://example.com",
    details:
      "Users can select rename patterns or define custom placeholders (e.g., timestamps, metadata). Features include batch preview, dry-run mode, and undo support.",
    role: "Solo Developer",
    challenges:
      "Designing an intuitive CLI interface and ensuring safe renaming with rollback support was critical.",
    screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 6,
    title: "Text-to-Image Generation using VQ-VAE",
    description:
      "A deep learning model to generate images from textual input using VQ-VAE architecture.",
    image: "/placeholder.svg",
    category: "Mini Projects",
    tags: ["PyTorch", "VQ-VAE", "NLP", "Vision"],
    learnings: [
      "Understanding vector quantization",
      "Training VQ-VAE models",
      "Image synthesis from latent space",
      "Text preprocessing and embeddings",
    ],
    github: "https://github.com/sriTechProjects/MDM_Data_Science",
    demo: "https://example.com",
    details:
      "This research-based project involved training a vector quantized autoencoder to reconstruct and generate images conditioned on text prompts. Used datasets like COCO and custom synthetic data for experimentation.",
    role: "ML Researcher & Implementer",
    challenges:
      "Model convergence and matching text-image embeddings posed major research-level challenges.",
    screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 7,
    title: "Automated Subnet Calculator",
    description:
      "A socket-based network calculator to compute subnetting in real-time with user input.",
    image: "/placeholder.svg",
    category: "Tech Practice",
    tags: ["Javascript", "Socket Programming", "Networking"],
    learnings: [
      "IP addressing & subnetting logic",
      "Client-server communication via sockets",
      "Binary conversion of IPs",
      "Interactive terminal interfaces",
    ],
    github: "https://github.com/CynicPoet/subnet_calculator",
    demo: "https://example.com",
    details:
      "This tool allows users to input IP address and required hosts/subnets, and computes subnet masks, ranges, and broadcast addresses. Real-time interaction is achieved through socket communication.",
    role: "System Designer & Developer",
    challenges:
      "Handling IP edge cases and optimizing socket responses for real-time usage was a tough task.",
    screenshots: ["/placeholder.svg", "/placeholder.svg"],
  },
];

// Modal component for project details
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                onClick={onClose}
              >
                <X className="h-5 w-5 text-black" />
              </button>

              <div className="p-6 text-black">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold mt-2">{project.title}</h2>

                {/* Image gallery */}
                {/*<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 rounded-xl aspect-video overflow-hidden"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>*/}

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Overview</h3>
                  <p className="text-gray-800 mt-2">{project.details}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    Challenges & Solutions
                  </h3>
                  <p className="text-gray-800 mt-2">{project.challenges}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Key Learnings</h3>
                  <ul className="mt-2 space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-800"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
      onClick={() => onClick(project)}
    >
      <h3 className="text-lg font-bold text-black">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{project.description}</p>
      <p className="text-sm text-gray-800 mt-2 font-medium">
        Role: {project.role}
      </p>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    "All Projects",
    "Mini Projects",
    "Major Projects",
    "Tech Practice",
  ];

  const filteredProjects =
    filter === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gradient">Projects</h2>
          <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
            A collection of my work, including both personal and professional
            projects.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-white/10"
              }`}
              whileHover={{ scale: filter !== category ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                layout // Optional: improves smooth layout shifts
              >
                <ProjectCard
                  project={project}
                  onClick={() => openProjectModal(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project detail modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={closeProjectModal}
        />
      </div>
    </section>
  );
};

export default Projects;
