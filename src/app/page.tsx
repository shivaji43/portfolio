"use client"

import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"
import { FaXTwitter, FaArrowLeftLong } from "react-icons/fa6"
import { motion } from "framer-motion"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-2 sm:mt-8 md:mt-16 lg:mt-8 space-x-3"
      >
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/shivajiraut/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/shivaji43"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://x.com/raut_madridista"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-8"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          src="/batman.jpg"
          alt="shivaji"
          width={100}
          className="rounded-full mb-4 sm:mb-0 sm:mr-4"
        />
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left"
        >
          Hey, I am Shivaji
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center mt-2 sm:mt-3 md:mt-1"
      >
        <h2 className="text-xl sm:text-2xl text-center">Full stack developer</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center mt-2 sm:mt-3 md:mt-4 px-4 sm:px-8 md:px-16 lg:px-32"
      >
        <p className="text-xs sm:text-sm md:text-base text-center max-w-2xl">
          I love to code and build things, play and watch football. I love contributing to
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="ml-1 inline-flex items-center"
            href="https://github.com/search?q=is%3Apr+author%3Ashivaji43+is%3Amerged+sort%3Aupdated-desc&type=pullrequests"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className="text-xl">OSS</b>
            <FaArrowLeftLong className="ml-1" />
          </motion.a>
          <br />
          Also <b>Solana</b> ftw
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
        <div className="justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-3 text-center text-xl">
          <b>Skills</b>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-3 text-xs flex flex-wrap justify-center gap-4"
        >
          {["React", "TypeScript", "NextJS", "NodeJs", "Tailwind", "Prisma", "Solana", "Go", "Python"].map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.1, backgroundColor: "#e2e8f0" }}
              className="bg-gray-100 p-2 rounded-md shadow-md text-center text-black min-w-[70px]"
            >
              <p className="text-xs font-semibold">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-24"
      >
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              title: "Valorant Website",
              description:
                "An interactive website showcasing Valorant game elements with smooth animations and responsive design",
              liveLink: "https://valo-website.vercel.app",
              githubLink: "https://github.com/shivaji43/Valorant",
              stack: ["React", "Tailwind", "Framer-motion", "GSAP"],
            },
            {
              title: "GIBWORK API APP",
              description: "An API app to fetch and create tasks with the gibwork API on solana blockchain",
              liveLink: "https://gibwork-api-examples-mu.vercel.app/",
              githubLink: "https://github.com/gibwork/gibwork-api-examples",
              stack: ["NextJS", "TypeScript", "Tailwind"],
            },
            {
              title: "Call of Code",
              description:
                "College's coding club website to showcase events, blogs, and projects with a responsive design",
              liveLink: "https://callofcode.in",
              githubLink: "https://github.com/call-0f-code/call-of-code",
              stack: ["NextJS", "Tailwind", "Aceternity"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-black p-6 rounded-lg shadow-xl border border-gray-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 min-h-[60px] ml-4">{project.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.stack.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-center space-x-6 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#9ca3af" }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors"
                    title="Live Demo"
                  >
                    <FaGlobe size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, color: "#9ca3af" }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors"
                    title="View Code"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-12"
      >
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6">Experience</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {[
            {
              company: "SkaleIT",
              role: "Software Developer Intern",
              duration: "NOV-2024 to FEB-2025",
              location: "Pune, India",
              description:
                "Worked on a AI product To calculate the Emotional Score of an Interviewee throughout across the interview",
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 text-black p-5 rounded-md shadow-lg"
            >
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm font-medium">{exp.role}</p>
              <p className="text-xs text-black">{exp.duration}</p>
              <p className="text-xs text-black">{exp.location}</p>
              <p className="text-sm mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
