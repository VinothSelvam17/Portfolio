import { ThemeToggle } from "../components/ThemeToggle";
import { StarBakground } from "../components/StarBakground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*  theme Toggle  */}
        <ThemeToggle/>
        {/*  Background Effects  */}
        <StarBakground></StarBakground>
        {/*  Navbar */}
        <Navbar/>
        {/*  Main Content  */}
        <main>
            <HeroSection/>
            <AboutMe/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
        {/*  Footer  */}
        <Footer/>
    </div>;
}