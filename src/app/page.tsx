import { Space_Grotesk } from "next/font/google"
import { FaLinkedin , FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className={`${spaceGrotesk.className} container mx-auto px-4`}>
      <div className="flex justify-center mt-2 sm:mt-8 md:mt-16 lg:mt-8 space-x-3">
        <a
          href="https://www.linkedin.com/in/shivaji-raut"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/shivaji43"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/raut_madridista"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
      </div>

      <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-8">
        <img src="/batman.jpg" alt="shivaji" width={100} className="rounded-full"/>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center ml-4 mt-2">
          Hey, I am Shivaji
        </h1>
      </div>
      
      <div className="flex justify-center mt-2 sm:mt-3 md:mt-1">
        <h2 className="text-xl sm:text-2xl text-center">
          Full stack developer
        </h2>
      </div>
      
      <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 px-4 sm:px-8 md:px-16 lg:px-32">
        <p className="text-xs sm:text-sm md:text-base text-center max-w-2xl">
          I love to code and build things, play and watch football.
          Also am a big fan of <b className="ml-1">Solana</b>
        </p>


      </div>
      <div >
        <div className="justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-3 text-center text-xl">
        <b>Skills</b>
        </div>
        
        <div className="mt-3 text-xs flex flex-wrap justify-center gap-4">
          {["React", "TypeScript", "NextJS", "NodeJs","Tailwind","Prisma","Solana"].map(skill => (
            <div key={skill} className="bg-gray-100 p-1 rounded-md shadow-sm text-center text-black min-w-[55px]">
              <p className="text-xs font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}