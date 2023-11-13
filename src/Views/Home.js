import React from 'react'
import Header from '../Components/Header/Header'
import ShowCaseSection from '../Components/ShowCase/ShowCaseSection'
import SponsorSection from '../Components/Sponsor/SponsorSection'
import FeatureSection from '../Components/Feature/FeatureSection'
import AboutSection from '../Components/About/AboutSection'
import ServiceSection from '../Components/Service/ServiceSection'
import ChooseSection from '../Components/Choose/ChooseSection'
import ProjectSection from '../Components/Project/ProjectSection'
import TeamSection from '../Components/Team/TeamSection'
import TestimonialSection from '../Components/Testimonial/TestimonialSection'
import ArticleSection from '../Components/Article/ArticleSection'
import NewsSection from '../Components/News/NewsSection'
import FooterSection from '../Components/Footer/FooterSection'

const Home = () => {
  return (
    <>
    <Header/>
    <main>
        <ShowCaseSection/>
        <SponsorSection/>
        <FeatureSection/>
        <AboutSection/>
        <ServiceSection/>
        <ChooseSection/>
        <ProjectSection/>
        <TeamSection/>
        <TestimonialSection/>
        <ArticleSection/>
        <NewsSection/>
    </main>
    <FooterSection/>
    </>
  )
}

export default Home