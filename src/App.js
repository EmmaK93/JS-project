import './App.css';
import AboutSection from './Components/About/AboutSection';
import ChooseSection from './Components/Choose/ChooseSection';
import FeatureSection from './Components/Feature/FeatureSection';
import Header from './Components/Header/Header';
import ProjectSection from './Components/Project/ProjectSection';
import ServiceSection from './Components/Service/ServiceSection';
import SponsorSection from './Components/Sponsor/SponsorSection';
import TeamSection from './Components/Team/TeamSection';





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
      
        
      </div>
    
    
    </>
  );
}

export default App;
