import React from 'react'
import Button from '../Generics/Buttons/Button'
import TitleSection from '../Generics/Title/TitleSection'

import './About.css'


import img_woman from '../../Assets/images/Image.jpg'



const AboutSection = () => {
  return (
    <section className="About">
            <div className="container">
            <div>
                <img src={img_woman} alt="Picture of a woman in an office"/>
                <div className="blue-box">
                    <div className="box-title">
                    <h3>Samantha Brown,</h3>
                    <p className="orange">Founder</p>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div>
                <TitleSection smallTitle="About Company" Title="We Are Business Consulting & Credit Repair Experts"/>
                    <p className="para-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    <Button type="black" Title="Learn More" url="/"/>
                    <Button type="trans" Title="Intro Video" url="/"/>
                </div>
            </div>
            
        </section>
  )
}

export default AboutSection