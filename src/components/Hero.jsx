import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { AspectRatio } from "./ui/aspect-ratio";
import profilePhoto from "../assets/profile_photo.png"

const SkillBadge = ({ name }) => (
  <motion.span
    className="skill-badge"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {name}
  </motion.span>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-mono">Hello, my name is</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 text-gradient">
                Srivaths Iyer
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-3">
                Building reliable and scalable tech solutions with clean design
              </h2>

              <p className="text-gray-800 mt-6 text-lg max-w-2xl">
                Computer Engineering student passionate about building
                end-to-end systems—from intuitive user experiences to robust
                backend architectures—integrating cloud, and scalable design
                principles.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <SkillBadge name="Express.js" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="Node.js" />
                <SkillBadge name="Cloud" />
                <SkillBadge name="Git" />
              </div>

              <div className="flex space-x-4 mt-8">
                <motion.a
                  href="https://github.com/sriTechProjects"
                  className="glass-card inline-flex items-center space-x-2 px-4 py-2 rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                  >
                    <title>GitHub</title>
                    <path
                      fill="black"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                  <span className="text-black">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/srivathsiyer/"
                  className="glass-card inline-flex items-center space-x-2 px-4 py-2 rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 text-white"
                  >
                    <path file ="black" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                  <span className="text-black">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="#contact"
                  className="glass-card inline-flex items-center space-x-2 px-4 py-2 rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Developer Image Card - replacing the featured project */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="glass-card rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-xl overflow-hidden">
                <AspectRatio ratio={4 / 5} className="w-full">
                  <img
                    src={profilePhoto}
                    alt="John Doe"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </AspectRatio>
              </div>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="mt-4 flex items-center space-x-3 cursor-pointer">
                    <Avatar className="h-10 w-10 border border-white/20">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                        alt="John Doe"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xl font-semibold">Hi, I'm Srivaths</p>
                      <p className="text-sm text-gray-800">
                        Hover for a fun fact!
                      </p>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="glass bg-white/5 backdrop-blur-md border border-white/10 text-white w-80">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Did you know?</h4>
                    <p className="text-sm text-gray-700">
                      When I'm not coding, you can find me playing the piano or
                      exploring hiking trails with my camera!
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
