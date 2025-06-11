import { motion } from "framer-motion"
import { FileText, ArrowDown } from "lucide-react"

// Resume bullet points
const resumePoints = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    points: [
      "Led a team of 5 developers in building a React-based SaaS platform",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipeline using GitHub Actions",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "2019 - 2021",
    points: [
      "Developed responsive web applications using React and TypeScript",
      "Collaborated with UX designers to implement user-friendly interfaces",
      "Integrated RESTful APIs and managed application state with Redux",
      "Wrote unit tests with Jest and React Testing Library"
    ]
  },
  {
    title: "Web Development Intern",
    company: "Tech Startups Co.",
    duration: "2018 - 2019",
    points: [
      "Assisted in developing the company website using HTML, CSS, and JavaScript",
      "Created and maintained documentation for codebase",
      "Participated in daily stand-up meetings and biweekly sprints",
      "Learned modern development workflows and version control with Git"
    ]
  }
]

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gradient">Resume</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A summary of my professional experience and achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="mr-2 h-5 w-5" />
                <span>Download Resume</span>
                <ArrowDown className="ml-2 h-4 w-4" />
              </motion.a>
            </div>

            <div className="max-h-[400px] overflow-hidden relative">
              <div className="aspect-[3/4] w-full bg-white/5 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg">Resume Preview</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Click the download button above to get the full resume
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </motion.div>

          <div className="space-y-8 mt-12">
            {resumePoints.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-primary">{item.company}</span>
                    <span className="text-sm text-gray-400">
                      {item.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
