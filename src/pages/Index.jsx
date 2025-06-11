
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import EducationAchievements from '../components/EducationAchievements';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EducationAchievements />
      <Projects />
      <Skills />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
