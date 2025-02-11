import Image from "next/image"
import { Github, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-black-100">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Shivaji Raut</h1>
          <p className="text-xl text-white-600">Full Stack Developer</p>
        </header>

        <section className="mb-12 flex items-center gap-8">
          <Image
            src="/shivaji.jpeg"
            alt="shivaji raut"
            height={200}
            width={200}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-white-700">
              I'm a web developer with a passion for creating beautiful and functional websites. With 5 years of
              experience, I specialize in front-end development and love working with modern technologies.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="list-disc pl-5">
            <li>Software Developer Intern At  <b>SkaleIt</b>  (Nov 2024 - Feb 2025)  </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-white p-4 rounded-3xl shadow ">
              <h3 className="font-semibold mb-2 text-white">E-commerce Platform</h3>
              <p className="text-sm text-gray-300 mb-4">
                Built a full-stack e-commerce solution using Next.js and Stripe
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://ecommerce-example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/shivaji43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-gray-700 text-white text-sm font-medium rounded hover:bg-gray-600 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
              </div>
            </li>
            <li className="bg-black p-4 rounded shadow">
              <h3 className="font-semibold mb-2 text-white">Portfolio Website</h3>
              <p className="text-sm text-gray-300 mb-4">
                Designed and developed a responsive portfolio website using React
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://shivajiraut.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/yourusername/portfolio-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-gray-700 text-white text-sm font-medium rounded hover:bg-gray-600 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
              </div>
            </li>
            <li className="bg-black p-4 rounded shadow">
              <h3 className="font-semibold mb-2 text-white">Task Management App</h3>
              <p className="text-sm text-gray-300 mb-4">
                Created a task management application with React and Firebase
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://taskmanager-example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/yourusername/task-manager-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-gray-700 text-white text-sm font-medium rounded hover:bg-gray-600 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML", "CSS", "Tailwind CSS","Prisma","Golang","Rust"].map((tech) => (
              <li key={tech} className="bg-black-500 text-white px-3 py-1 rounded-full text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

