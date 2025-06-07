"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"
import { FaXTwitter, FaArrowLeftLong } from "react-icons/fa6"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

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

  const projects = [
    {
      title: "VerifyBot",
      description: "A Discord bot to verify token holdings of users and assign roles based on holdings",
      image: "/verifybot.svg",
      liveLink: "https://verify-bot.gib.work/",
      githubLink: "https://github.com/gibwork/verify-bot",
      stack: ["NextJS", "Tailwind", "Express", "Supabase", "Discord.js"],
    },
    {
      title: "Sol Dapper",
      description:
        "An App to build Solana dapps with just few Prompts , Received $4000 grant from Solana foundation and Coin DCX",
      image: "/soldapper.png",
      liveLink: "https://soldapper.fun",
      githubLink: "https://github.com/Sol-Dapper",
      stack: ["NextJS", "TypeScript", "Tailwind", "AWS", "Prisma", "OpenAI", "Claude"],
    },
    {
      title: "Liquidate",
      description: "A Place to buy Nfts in Stablecoins on Solana",
      image: "./nftlelo.png",
      liveLink: "https://nftlelo.xyz",
      githubLink: "https://github.com/shivaji43/buy-nft/",
      stack: ["NextJS", "Tailwind", "MagicEden", "Jupiter"],
    },
  ]

  const skills = ["React", "TypeScript", "NextJS", "NodeJs", "Tailwind", "Prisma", "Solana", "Go", "Python"]

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Dot Background */}
      <div
        className={cn(
          "fixed inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />

      {/* Radial gradient overlay for faded effect */}
      <div className="fixed inset-0 z-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Header with Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center pt-8"
        >
          <div className="flex items-center justify-center space-x-4">
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/shivajiraut/", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/shivaji43", label: "GitHub" },
              { icon: FaXTwitter, href: "https://x.com/raut_madridista", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.div key={label} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a className="md:px-5" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={24} />
                </a>
              </motion.div>
            ))}
            <div className="w-px  h-6 bg-border" />
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
              <AvatarImage src="/batman.jpg" alt="Shivaji" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center sm:text-left"
          >
            <h1 className="text-4xl py-2 sm:text-5xl md:text-6xl font-bold text-secondary">Hey, I am Shivaji</h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl sm:text-2xl text-muted-foreground mt-2"
            >
              Full stack developer
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <Card className="max-w-2xl border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                I love to code and build things, play and watch football. I love contributing to{" "}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center font-semibold text-primary hover:underline"
                  href="https://github.com/search?q=is%3Apr+author%3Ashivaji43+is%3Amerged+sort%3Aupdated-desc&type=pullrequests"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OSS <FaArrowLeftLong className="ml-1 h-3 w-3" />
                </motion.a>
                <br />
                Also <span className="font-bold text-primary">Solana</span> ftw
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">Skills</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill) => (
              <motion.div key={skill} variants={item} whileHover={{ scale: 1.05 }}>
                <Badge variant="default" className="px-4 py-2 text-sm font-medium">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl sm:text-3xl text-center font-bold mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
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
          className="mt-20 mb-12 pb-12"
        >
          <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8">Experience</h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">SkaleIT</CardTitle>
                  <CardDescription className="text-base font-medium">Software Developer Intern</CardDescription>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-muted-foreground">
                    <span>NOV-2024 to FEB-2025</span>
                    <span>Pune, India</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Worked on a AI product to calculate the Emotional Score of an Interviewee throughout the interview
                    process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
