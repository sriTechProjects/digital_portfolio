import { useState } from "react";
import { motion } from "framer-motion";

// Skill data
const skillsData = {
  Frontend: [
    {
      name: "JavaScript",
      level: 65,
      subtopics: ["ES6+", "DOM Manipulation", "Async/Await", "Fetch API"]
    },
    {
      name: "HTML",
      level: 60,
      subtopics: ["Semantic Tags", "Forms", "SEO Basics"]
    },
    {
      name: "CSS",
      level: 50,
      subtopics: ["Flexbox", "Grid", "Animations", "Responsive Design"]
    },
    {
      name: "React",
      level: 30,
      subtopics: ["JSX", "Hooks", "State Management", "Component Lifecycle"]
    }
  ],

  Backend: [
    {
      name: "Node.js",
      level: 65,
      subtopics: ["Event Loop", "Async Programming", "Modules", "Streams"]
    },
    {
      name: "Express",
      level: 70,
      subtopics: ["Routing", "Middleware", "Error Handling", "REST APIs"]
    },
    {
      name: "MySQL",
      level: 60,
      subtopics: ["Joins", "Stored Procedures", "Indexes", "Normalization"]
    },
    {
      name: "MongoDB",
      level: 40,
      subtopics: ["Schemas", "Aggregation", "CRUD Operations"]
    },
    {
      name: "REST APIs",
      level: 70,
      subtopics: ["HTTP Methods", "Status Codes", "CRUD APIs", "Authentication"]
    }
  ],

  Tools: [
    {
      name: "Git",
      level: 80,
      subtopics: ["Branches", "Merge/Rebase", "Conflict Resolution"]
    },
    {
      name: "GitHub",
      level: 70,
      subtopics: ["Pull Requests", "Issues", "Actions", "Projects"]
    },
    {
      name: "Docker",
      level: 30,
      subtopics: ["Images", "Containers"]
    },
    {
      name: "Postman",
      level: 80,
      subtopics: ["Collections", "Environment Variables", "Testing APIs", "Assertions"]
    }
  ],

  // DevOps: [
  //   {
  //     name: "Linux CLI",
  //     level: 15,
  //     subtopics: ["File System Navigation", "Permissions", "Bash Scripting"]
  //   }
  // ],

  AWS_Cloud: [
    {
      name: "AWS EC2",
      level: 70,
      subtopics: ["Launching Instances", "Security Groups", "Key Pairs"]
    },
    {
      name: "AWS S3",
      level: 50,
      subtopics: ["Buckets", "Object Storage", "Permissions", "Static Hosting"]
    },
    {
      name: "AWS IAM",
      level: 75,
      subtopics: ["Roles", "Policies", "Users/Groups", "Access Control"]
    },
    {
      name: "AWS VPC",
      level: 65,
      subtopics: ["Subnets", "Route Tables", "NAT", "Security Groups"]
    },
    {
      name: "AWS CloudFormation",
      level: 40,
      subtopics: ["Templates", "Stacks", "Resources", "Parameters"]
    },
    {
      name: "AWS Lambda",
      level: 60,
      subtopics: ["Functions", "Triggers", "Permissions", "Monitoring"]
    }
  ],

  ProgrammingLanguages: [
    {
      name: "Java",
      level: 70,
      subtopics: ["OOP", "Collections", "Multithreading", "JVM"]
    },
    {
      name: "JavaScript",
      level: 65,
      subtopics: ["Functions", "Closures", "Objects", "Prototypes"]
    },
    {
      name: "Python",
      level: 30,
      subtopics: ["Syntax", "Data Structures", "Functions", "Libraries"]
    },
    {
      name: "C/C++",
      level: 50,
      subtopics: ["Pointers", "Memory Management", "OOP in C++"]
    }
  ],

  SoftSkills: [
    {
      name: "Communication",
      level: 85,
      subtopics: ["Verbal", "Written", "Technical Documentation"]
    },
    {
      name: "Teamwork",
      level: 80,
      subtopics: ["Collaboration", "Peer Reviews", "Shared Goals"]
    },
    {
      name: "Problem Solving",
      level: 90,
      subtopics: ["Debugging", "Analytical Thinking", "Root Cause Analysis"]
    },
    {
      name: "Time Management",
      level: 75,
      subtopics: ["Prioritization", "Task Scheduling", "Meeting Deadlines"]
    },
    {
      name: "Leadership",
      level: 70,
      subtopics: ["Team Coordination", "Mentoring", "Decision Making"]
    }
  ]
};



// Helper to convert level to visual width
const getBarWidth = (level) => `${level}%`;

// Label based on level
const getSkillLabel = (level) => {
  if (level >= 80) return "Expert";
  if (level >= 60) return "Intermediate";
  return "Basic";
};

// Individual skill component
const SkillItem = ({ name, level = 70, subtopics = [] }) => {
  return (
    <motion.div
      className="glass-card flex flex-col items-center p-4"
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center w-full">
        <div className="text-xl mb-1 font-semibold">{name}</div>
        <div className="text-sm text-gray-800 mb-3">{getSkillLabel(level)}</div>

        {subtopics.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {subtopics.map((topic, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-white/20 text-black backdrop-blur-lg border border-white/30"
              >
                {topic}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};



const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gradient">
            My Technical Toolkit
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive collection of programming languages, frameworks, and
            tools I work with.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-white/10"
              }`}
              whileHover={{ scale: activeCategory !== category ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillsData[activeCategory].map((skill) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              level={skill.level}
              subtopics={skill.subtopics}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
