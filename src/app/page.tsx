import { FaLinkedin, FaGithub ,FaGlobe } from "react-icons/fa";
import { FaXTwitter , FaArrowLeftLong} from "react-icons/fa6";

export default function Home() {
  return (
    <div className={`container mx-auto px-4`}>
      <div className="flex justify-center mt-2 sm:mt-8 md:mt-16 lg:mt-8 space-x-3">
        <a href="https://www.linkedin.com/in/shivajiraut/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/shivaji43" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://x.com/raut_madridista" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-8">
        <img src="/batman.jpg" alt="shivaji" width={100} className="rounded-full mb-4 sm:mb-0 sm:mr-4" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left">Hey, I am Shivaji</h1>
      </div>

      <div className="flex justify-center mt-2 sm:mt-3 md:mt-1">
        <h2 className="text-xl sm:text-2xl text-center">Full stack developer</h2>
      </div>

      <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 px-4 sm:px-8 md:px-16 lg:px-32">
        <p className="text-xs sm:text-sm md:text-base text-center max-w-2xl">
          I love to code and build things, play and watch football. I love contributing to
          <a
            className="ml-1 inline-flex items-center"
            href="https://github.com/search?q=is%3Apr+author%3Ashivaji43+is%3Amerged+sort%3Aupdated-desc&type=pullrequests"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className="text-xl">OSS</b>
            <FaArrowLeftLong className="ml-1" />
          </a>
          <br />
          Also <b>Solana</b> ftw
        </p>
      </div>

      <div>
        <div className="justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-3 text-center text-xl">
          <b>Skills</b>
        </div>

        <div className="mt-3 text-xs flex flex-wrap justify-center gap-4">
          {["React", "TypeScript", "NextJS", "NodeJs", "Tailwind", "Prisma", "Solana","Go","Python"].map((skill) => (
            <div key={skill} className="bg-gray-100 p-1 rounded-md shadow-sm text-center text-black min-w-[55px]">
              <p className="text-xs font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Valorant Website",
              description: "An interactive website showcasing Valorant game elements with smooth animations and responsive design",
              liveLink: "https://valo-website.vercel.app",
              githubLink: "https://github.com/shivaji43/Valorant",
              stack: ["React", "Tailwind", "Framer-motion", "GSAP"],
            },
            {
              title: "GIBWORK API APP",
              description: "An API app to fetch and create tasks with the gibwork API on solana blockchain",
              liveLink: "https://gibwork-api-examples-mu.vercel.app/",
              githubLink: "https://github.com/gibwork/gibwork-api-examples",
              stack: ["NextJS", "TypeScript","Tailwind"],
            },
            {
              title: "Call of Code",
              description: "College's coding club website to showcase events, blogs, and projects with a responsive design",
              liveLink: "https://callofcode.in",
              githubLink: "https://github.com/call-0f-code/call-of-code",
              stack: ["NextJS", "Tailwind", "Aceternity", ],
            },
          ].map((project, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white text-center">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 min-h-[60px] ml-4">{project.description}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 ml-8">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    title="Live Demo"
                  >
                    <FaGlobe size={24} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    title="View Code"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-5">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {[
            { company: "SkaleIT", role: "Software Developer Intern", duration: "NOV-2024 to FEB-2025" ,location:"Pune , India" ,description:"Worked on a AI product To calculate the Emotional Score of an Interviewee throughout across the interview" },
          ].map((exp, index) => (
            <div key={index} className="bg-gray-100 text-black p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm font-medium">{exp.role}</p>
              <p className="text-xs text-black">{exp.duration}</p>
              <p className="text-xs text-black">{exp.location}</p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

