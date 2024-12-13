import { AboutMe } from "@/components/about-me"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

