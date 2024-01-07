import Image from 'next/image'
import MySection from "./components/MySection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import ProjectsSection from "./components/ProjectSection";
import  EmailSection  from './components/EmailSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';
import SkilllSection from './components/SkilllSection';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <MySection />
          <AchievementsSection />
          <AboutSection />
          <SkilllSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
  );
}
