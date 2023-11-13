import React from 'react'
import FooterSection from '../Components/Footer/FooterSection';
import './NotFound.css'

import img_notFound from '../Assets/images/VS-404-page-not-found-1024x512-1.jpg';
import Header from '../Components/Header/Header';


const NotFound = () => {
  return (
    <>
    <Header/>
    <main>
      <div className="picture container">
      <img src={img_notFound} alt="Page not found"/>
      </div> 
    </main>
    <FooterSection/>
    </>
  )
}

export default NotFound