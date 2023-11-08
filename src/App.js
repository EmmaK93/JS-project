import './App.css';
import AboutSection from './Components/About/AboutSection';
import ArticleSection from './Components/Article/ArticleSection';
import ChooseSection from './Components/Choose/ChooseSection';
import FeatureSection from './Components/Feature/FeatureSection';
import FooterSection from './Components/Footer/FooterSection';
import Header from './Components/Header/Header';
import NewSection from './Components/News/NewSection';
import ProjectSection from './Components/Project/ProjectSection';
import ServiceSection from './Components/Service/ServiceSection';
import SponsorSection from './Components/Sponsor/SponsorSection';
import TeamSection from './Components/Team/TeamSection';
import TestimonialSection from './Components/Testimonial/TestimonialSection';





function App() {
  return (
    <>
    <div className="container">
        
      <Header/>
      <SponsorSection/>
      <FeatureSection/>
      <AboutSection/>
      <ServiceSection/>
      <ChooseSection/>
      <ProjectSection/>
      <TeamSection/>
      <TestimonialSection/>
      <ArticleSection/>
      <NewSection/>
      <FooterSection/>
      
        
      </div>
    
    
    </>
  );
}

export default App;
