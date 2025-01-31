import Link from "next/link"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import EmailSection from "./components/EmailSection"
import AchievementsSection from "./components/AchievementsSection"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12  py-4">

        <HeroSection />
        <AchievementsSection/>
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />

    </main>
  )
}
