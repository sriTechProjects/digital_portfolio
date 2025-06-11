import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.button
            onClick={scrollToTop}
            className="p-3 glass rounded-full mb-8"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>

          <div className="text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Srivaths Iyer. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
